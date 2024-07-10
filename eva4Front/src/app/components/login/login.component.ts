import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {

  constructor(public router: Router){}

  login={
    email: '',
    password:''
  }
  warningMessage=''

  validations(){
    this.warningMessage=''
    if(this.login.email.length ===0 || this.login.password.length === 0){
      this.warningMessage='Todos los campos son obligatorios'
      return
    }

    this.login={
      email: '',
      password:''
    }
  }

  navigateToSignUp(){
    this.router.navigate(['registro'])
  }
}
