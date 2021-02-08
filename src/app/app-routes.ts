import { Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { CommentsComponent } from './comments/comments.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';

//Exportamos constante de rutas
export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'comments/:id', component: CommentsComponent},
    {path: 'login', component: LoginComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'user/:id', component: UserComponent},
    {path: '', component: LoginComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];