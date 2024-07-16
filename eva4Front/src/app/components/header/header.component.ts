import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IconletterComponent } from '../iconletter/iconletter.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IconletterComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(public router: Router){}

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
