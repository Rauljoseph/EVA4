import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    {
        path:'signup', title:'Registro', loadComponent: ()=> import ('./pages/signup/signup.component')
    },
    {
        path:'login', title:'Login', loadComponent:()=>import('./pages/login/login.component')
    },
    {
        path:'home/:id', title:'Home', loadComponent:()=>import('./pages/home/home.component'), canActivate: [AuthGuard]
    },
    {
        path:'password-recover', title:'Recuperar contraseña', loadComponent:()=>import('./components/passwordrecover/passwordrecover.component')
    },
    {
        path:'**' , redirectTo: '/login', pathMatch:'full'
    }
];
