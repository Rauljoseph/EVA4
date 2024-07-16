import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../model/user';
import { comparePassword, encryptPassword } from '../../password';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SignupService } from '../../services/signup.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export default class SignupComponent {
  constructor(private router: Router, private localStorage: SignupService) {}

  isInvalid: boolean = false;
  isValid: boolean = false;

  signupForm: User = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  warningMessage = '';
  successMessage = '';

  async validations() {
    this.warningMessage = '';
    this.successMessage = '';

    if (
      this.signupForm.username.length === 0 ||
      this.signupForm.email.length === 0 ||
      this.signupForm.password.length === 0 ||
      this.signupForm.confirmPassword.length === 0
    ) {
      this.warningMessage = 'Todos los campos son obligatorios';
      this.isInvalid = !this.isInvalid;
      return;
    }
    
    const findUsername = this.localStorage.getItem(this.signupForm.username)
    if(findUsername){
      this.warningMessage= 'El nombre de usuario ya existe'
      return
    }

    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const validationEmail = regexEmail.test(this.signupForm.email);
    if (!validationEmail) {
      this.warningMessage = 'El email no es valido';
      return;
    }
    
    const findEmail = this.localStorage.getItem(this.signupForm.email)
    if(findEmail){
      this.warningMessage= 'El email ya se encuentra registrado'
      return
    }

    if (this.signupForm.password.length < 8) {
      this.warningMessage =
        'La contraseña debe ser igual o mayor a 8 caracteres';
      return;
    }

    const hashedPassword = await encryptPassword(
      this.signupForm.password
    );
    console.log('hash', hashedPassword);

    const isMatch = await comparePassword(
      this.signupForm.confirmPassword,
      hashedPassword
    );
    console.log('match', isMatch);

    if (!isMatch) {
      this.warningMessage = 'Las contraseñas no coindicen';
      return;
    }


    const currentUser = {
      username: this.signupForm.username.toLocaleLowerCase(),
      email: this.signupForm.email.toLocaleLowerCase(),
      password: hashedPassword,
    };

    console.log(currentUser);
    
    this.setUser(this.signupForm.username, currentUser);
  }

  setUser(username: string, body: object) {
    this.localStorage.setItem(username.toLocaleLowerCase(), JSON.stringify(body));
    this.signupForm = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
    this.successMessage = 'Se ha creado exitosamente';
  }

  navigateToLogin() {
    this.router.navigate(['login']);
  }
}
