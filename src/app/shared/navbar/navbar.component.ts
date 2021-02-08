import { Component, OnInit } from '@angular/core';

//Para obtener los parámetros de la ruta
import { NavigationStart } from '@angular/router';

//Para navegar en la SPA y obtener la ruta actual
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  logueado: boolean = true;

  constructor(private _ruta: Router) {
  }

  ngOnInit(): void {
  }

  mostrar(){
    this._ruta.events.subscribe((evento: any) => {
      if(evento instanceof NavigationStart){
        if(evento.url == "/login" || evento.url == "/"){
          this.logueado = false;
        }
        else if(evento.url == "/home"){
          this.logueado = true;
        }
      }
    });
    return this.logueado;
  }

  logout(){
    this._ruta.navigate(['login']);
  }
}
