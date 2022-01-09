import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map'

//import 'rxjs/add/operator/map'
import { map } from 'rxjs/operators';
//import { Observable, of, Subject } from 'rxjs';
//import 'rxjs/Rx';
//<import { map, filter, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HerokuappProductosService {

  constructor(private _http: HttpClient) { }

  metodoHerokuappProducts(){
    const urlAPI='https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';
    return this._http.get(urlAPI).pipe( map( (res: any) => res) );
    //map(res => res);
    //return this.http.get('http://localhost/ionicapis/public/api/products').pipe(map(res => res.json()));

  }// end metodoHerokuappProducts


}
