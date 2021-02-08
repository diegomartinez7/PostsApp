import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CommentsComponent } from './comments/comments.component';
import { ProfileComponent } from './profile/profile.component';

//Importamos la constante ROUTES y el modulo para manejar rutas
import { ROUTES } from './app-routes';
import { RouterModule } from '@angular/router';

//Para que se puedan realizar las peticiones HTTP
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    CommentsComponent,
    ProfileComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
