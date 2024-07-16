import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../../services/signup.service';

@Component({
  selector: 'app-passwordrecover',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './passwordrecover.component.html',
  styleUrl: './passwordrecover.component.css'
})
export default class PasswordrecoverComponent {

  warningMessage= ''
  successMessage=''
  email=''
  constructor(private router: Router, private localStorage: SignupService){}

  validations(){
    this.warningMessage=''
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const validationEmail = regexEmail.test(this.email);
    if (!validationEmail) {
      this.warningMessage = 'El email no es valido';
      return;
    }

    const findEmail = this.localStorage.getItem(this.email)
    if (!findEmail){
      this.warningMessage= 'El correo electrónico no está registrado'
      return
    }

    this.successMessage=`Un email ha sido enviado con instrucciones para recuperar la contraseña a ${this.email}`
    this.email='' 


  }
  
  navigateToSignUp(){
    this.router.navigate(['signup'])
  }
}
