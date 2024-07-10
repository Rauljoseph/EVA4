import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'registro', title:'Registro', loadComponent: ()=> import ('./pages/signup/signup.component')
    },
    {
        path:'login', title:'Login', loadComponent:()=>import('./components/login/login.component')
    },
    {
        path:'**' , redirectTo: '/login', pathMatch:'full'
    }
];
