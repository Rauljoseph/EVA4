import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SignupService } from '../../services/signup.service';
import { User } from '../../model/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export default class HomeComponent {
  username!: string;
  userData!: User | null;
  allData: { key: string, value: string }[] = [];
  userList: User[]= []
  letter?: string = ''
  constructor(
    private activedRoute: ActivatedRoute,
    private signupService: SignupService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getData()
    this.allData = this.signupService.getAllItems();
    console.log('Todos los datos guardados en localStorage:', this.allData);
    this.allData.forEach(item => {
      const parsedObject = JSON.parse(item.value);
      this.userList.push(parsedObject);
    });
    console.log(this.userList);
  }

  getData() {
    this.username = this.activedRoute.snapshot.params['id'];

    this.userData = this.signupService.getItem(this.username);

    this.letter = this.userData?.username.split("").slice(0,1).join("").toUpperCase()
    console.log(this.letter);
    

    console.log('este el home component', this.userData);

  }

  logout() {
    this.signupService.logout();
    this.router.navigate(['login']);
  }
}
