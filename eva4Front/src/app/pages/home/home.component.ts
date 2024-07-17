import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SignupService } from '../../services/signup.service';
import { User } from '../../model/user';
import { CommonModule } from '@angular/common';
import { IconletterComponent } from '../../components/iconletter/iconletter.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, IconletterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export default class HomeComponent {
  username!: string;
  userData!: User | null;
  allData: { key: string, value: string }[] = [];
  userList: User[]= []
  letterIcon?: string = ''
  constructor(
    private activedRoute: ActivatedRoute,
    private signupService: SignupService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getData()
    this.allData = this.signupService.getAllItems();
    this.allData.forEach(item => {
      const parsedObject = JSON.parse(item.value);
      if(parsedObject !== true){
        this.userList.push(parsedObject);
      }      
    });
  }

  getData() {
    this.username = this.activedRoute.snapshot.params['id'];

    this.userData = this.signupService.getItem(this.username);

    this.letterIcon = this.userData?.username.split("").slice(0,1).join("").toUpperCase()    
  }

  logout() {
    this.signupService.logout();
    this.router.navigate(['login']);
  }
}
