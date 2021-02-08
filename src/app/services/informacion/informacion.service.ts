import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  constructor(private http: HttpClient) { }

  hacerPeticion(peticion: string){
    return this.http.get(`https://jsonplaceholder.typicode.com/${peticion}`);
  }

  getPosts(){
    return this.hacerPeticion('posts').pipe(map(datos => {
      return datos;
    }));
  }

  getUsers(){
    return this.hacerPeticion('users').pipe(map(datos => {
      return datos;
    }));
  }

  getComments(){
    return this.hacerPeticion('comments').pipe(map(datos => {
      return datos;
    }));
  }

}
