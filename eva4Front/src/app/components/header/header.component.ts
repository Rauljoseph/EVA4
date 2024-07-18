import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from '../../services/signup.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(public router: Router, public localStorage: SignupService){}

  navigateToSignup(){
    this.router.navigate(['signup'])
  }

  navigateToHome(){
    this.router.navigate(['home'])
  }

  navigateToLogin(){
    this.router.navigate(['login'])
  }
}
