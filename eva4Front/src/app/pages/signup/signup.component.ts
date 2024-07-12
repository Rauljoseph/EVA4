import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../model/user';
import { comparePassword, encryptPassword } from './password';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export default class SignupComponent {

  constructor(public router: Router){}


  signupForm : User= {
    username:'',
    email:'',
    password: '',
    confirmPassword: ''
  }

  warningMessage=''
  successMessage= ''


  validations(){
    this.warningMessage=''
    this.successMessage=''

    if(this.signupForm.username.length === 0 || this.signupForm.email.length === 0 || this.signupForm.password.length === 0 || this.signupForm.confirmPassword.length === 0){
      this.warningMessage='Todos los campos son obligatorios'
      return
    }

    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const validationEmail = regexEmail.test(this.signupForm.email)
    if(!validationEmail){
      this.warningMessage='El email no es valido'
      return
    }

    if(this.signupForm.password.length < 8 ){
      this.warningMessage='La contraseña debe ser igual o mayor a 8 caracteres'
      return
    }

    // if(this.signupForm.confirmPassword !== this.signupForm.password ){
    //   this.warningMessage='La contraseña no coindice'
    //   return
    // }

    
    const hashPassword = encryptPassword(this.signupForm.password)

    const validationPassword = comparePassword(hashPassword, this.signupForm.confirmPassword)

    if(!validationPassword){
      this.warningMessage='la contraseña no coincide'
      return
    }

    
    this.signupForm.password= hashPassword

    console.log(this.signupForm.password);
    

    // localStorage.setItem(this.signupForm.email, this.signupForm)

    this.successMessage="Se ha creado exitosamente"


    this.signupForm= {
      username:'',
      email:'',
      password: '',
      confirmPassword: ''
    }
  }

  navigateToLogin(){
    this.router.navigate(['login'])
  }
}
