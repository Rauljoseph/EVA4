import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../../services/signup.service';
import { comparePassword } from '../../password';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export default class LoginComponent {
  constructor(
    private router: Router,
    private signupService: SignupService
  ) {}

  login = {
    username: '',
    password: '',
  };
  warningMessage = '';

  validations() {
    this.warningMessage = '';
    if (this.login.username.length === 0 || this.login.password.length === 0) {
      this.warningMessage = 'Todos los campos son obligatorios';
      return;
    }

    this.loginMethod();
  }

  async loginMethod() {
    const username = this.login.username.toLocaleLowerCase()
    const data = this.signupService.getItem(username);
    if (!data) {
      return (this.warningMessage = 'No se ha encontrado ningun usuario');
    }

    const isMatch = await comparePassword(this.login.password, data.password);
    if (!isMatch) {
      this.warningMessage = 'Contraseña incorrecta';
      return;
    }

    const login = this.signupService.login();
    if (!login) {
      return (this.warningMessage = 'No se pudo iniciar sesión');
    }

    this.router.navigate(['home', data.username]);

    this.login = {
      username: '',
      password: '',
    };
    return;
  }

  navigateToSignUp() {
    this.router.navigate(['signup']);
  }

  navigateToPasswordRecover(){
    this.router.navigate(['password-recover'])
  }
}
