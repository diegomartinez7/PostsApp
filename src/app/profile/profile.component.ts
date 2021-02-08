import { Component, OnInit } from '@angular/core';

//Importamos el servicio
import { InformacionService } from '../services/informacion/informacion.service';

//Para navegar en la SPA
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  ArrayUsers: any = [];

  constructor(private _info: InformacionService, private _ruta: Router) { 
    this._info.getUsers().subscribe((data: any) => {
      this.ArrayUsers = data;
    });
  }

  ngOnInit(): void {
  }

  navegarUsuario(uID){
    this._ruta.navigate(['user',uID]);
  }

}
