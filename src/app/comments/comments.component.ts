import { Component, OnInit } from '@angular/core';

//Importamos el servicio
import { InformacionService } from '../services/informacion/informacion.service';

//Para obtener los parámetros de la ruta
import { ActivatedRoute } from '@angular/router';

//Para navegar en la SPA
import { Router } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  Post: any = [];
  ArrayComments: any = [];
  User: any = [];

  constructor(private _info: InformacionService, private _aroute: ActivatedRoute, private _ruta: Router) { 
    this._aroute.params.subscribe(params => {
      this._info.getComments().subscribe((data: any) => {
        for(let elem of data){
          if(params['id'] == elem.postId){
            this.ArrayComments.push(elem);
          }
        }
      });

    this._info.getPosts().subscribe((data: any) => {
        for(let elem of data){
          if(params['id'] == elem.id){
            this.Post = elem;
          }
        }
      });
    });

    this._info.getUsers().subscribe((data: any) => {
      for(let elem of data){
        if(this.Post.userId == elem.id){
          this.User = elem;
        }
      }
    });
  }

  ngOnInit(): void {
    this._info.getUsers().subscribe((data: any) => {
      for(let elem of data){
        if(this.Post.userId == elem.id){
          this.User = elem;
        }
      }
    });
  }

  numeroPost(userID, postID){
    return (postID - (userID-1)*10).toString();
  }

  nombreUsuario(){
    return this.User.username;
  }

  navegarPosts(direccion){
    this._ruta.routeReuseStrategy.shouldReuseRoute = () => false;
    this._ruta.onSameUrlNavigation = 'reload';

    if(direccion == '-'){
      if(Number(this.Post.id) > 1){
        this._ruta.navigate(['comments',this.Post.id-1]);
      }
      else{
        this._ruta.navigate(['comments',100]);
      }
    }
    else if(direccion == '+'){
      if(Number(this.Post.id) < 100){
        this._ruta.navigate(['comments',this.Post.id+1]);
      }
      else{
        this._ruta.navigate(['comments',1]);
      }
    }
  }

  navegarUsuario(uID){
    this._ruta.navigate(['user',uID]);
  }
}
