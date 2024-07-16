import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../../services/signup.service';
import { User } from '../../model/user';

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
  allData: { key: string, value: string }[] = [];
  userList:User[] = []
  constructor(private router: Router, private localStorage: SignupService){}

  validations(){
    this.warningMessage=''
    this.successMessage= ''

    const email = this.email.toLowerCase()
    if(email.length === 0 ){
      this.warningMessage= 'El campo no puede estar vacio'
      return
    }

    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const validationEmail = regexEmail.test(email);
    if (!validationEmail) {
      this.warningMessage = 'El email no es valido';
      return;
    }
    
    this.allData = this.localStorage.getAllItems();
    this.allData.forEach(item => {
      const parsedObject = JSON.parse(item.value);
      this.userList.push(parsedObject);
    });

    const findEmail = this.userList.find(e=> e.email=== email)
    if(!findEmail){
      this.warningMessage= 'El email no se encuentra registrado'
      return
    }
 
    this.successMessage=`Un email ha sido enviado con instrucciones para recuperar la contraseña a ${email}`
    this.email='' 

  }
  
  navigateToSignUp(){
    this.router.navigate(['signup'])
  }
}
