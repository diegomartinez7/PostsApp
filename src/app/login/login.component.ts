import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';

//Para navegar en la SPA
import { Router } from '@angular/router';

//Importamos el servicio
import { InformacionService } from '../services/informacion/informacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ArrayCorreos: any = [];

  constructor(private _info: InformacionService, private _ruta: Router) {
    this._info.getUsers().subscribe((data: any) => {
      for(let elem of data){
        this.ArrayCorreos.push(elem.email);
      }
    });

    console.log(this.ArrayCorreos);
  }

  ngOnInit(): void {
  }

  comprobarCuenta(valor, clave){
    for(let correo of this.ArrayCorreos){
      if(valor == correo && clave.length >= 8){
        this._ruta.navigate(['home']);
      }
    }
  }
}
