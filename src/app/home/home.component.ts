import { Component, OnInit } from '@angular/core';

//Para navegar en la SPA
import { Router } from '@angular/router';

//Importamos el servicio
import { InformacionService } from '../services/informacion/informacion.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ArrayPosts: any = [];
  ArrayUsers: any = [];
  ArrayComments: any = [];
  nombre: string;

  constructor(private _info: InformacionService, private _router: Router) { 
    this._info.getPosts().subscribe((data: any) => {
      this.ArrayPosts = data.sort(function (elem1, elem2) {
        if (elem1.title > elem2.title) {
          return 1;
        }
        if (elem1.title < elem2.title) {
          return -1;
        }
        //Si son iguales
        return 0;
      });;
    });

    this._info.getUsers().subscribe((data: any) => {
      this.ArrayUsers = data;
    });

    this._info.getComments().subscribe((data: any) => {
      for(let pID of data){
        this.ArrayComments.push(pID.postId)
      }
    });
  }

  ngOnInit(): void {
  }

  usuario(id){
    for(let user of this.ArrayUsers){
      if(user.id == id){
        this.nombre = user.name + " - " + user.username;
        break;
      }
    }

    return this.nombre;
  }

  comentarios(pID){
    let cont = 0;
    for(let elem of this.ArrayComments){
      if(elem == pID){
        cont++;
      }
    }
    return cont;
  }

  navegarComentarios(pID){
    this._router.navigate(['comments',pID]);
  }

  navegarUsuario(uID){
    this._router.navigate(['user',uID]);
  }

}
