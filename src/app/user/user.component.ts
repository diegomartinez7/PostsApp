import { Component, OnInit } from '@angular/core';

//Importamos el servicio
import { InformacionService } from '../services/informacion/informacion.service';

//Para obtener los parámetros de la ruta
import { ActivatedRoute } from '@angular/router';

//Para navegar en la SPA
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  User: any = [];
  ArrayPosts: any = [];
  ArrayComments: any = [];

  constructor(private _info: InformacionService, private _aroute: ActivatedRoute, private _ruta: Router) {
    this._aroute.params.subscribe(params => {
      this._info.getUsers().subscribe((data: any) => {
        for(let elem of data){
          if(params['id'] == elem.id){
            this.User = elem;
            break;
          }
        }
      });
  
      this._info.getPosts().subscribe((data: any) => {
        for(let elem of data){
          if(params['id'] == elem.userId){
            this.ArrayPosts.push(elem);
          }
        }
      });

      this._info.getComments().subscribe((data: any) => {
        for(let elem of data){
          this.ArrayComments.push(elem.postId)
        }
      });
    });
  }

  ngOnInit(): void {
  }

  direccion(){
    return this.User.address.suite+", "+this.User.address.street+", "+this.User.address.zipcode+", "+this.User.address.city;
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
    this._ruta.navigate(['comments',pID]);
  }
}
