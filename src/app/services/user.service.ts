import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import {GLOBAL} from './global'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  public url:string
  constructor(
    public _http: HttpClient
  ) {
    this.url = GLOBAL.url;
    
   }
   register(user:User):Observable<any>{
     let params = JSON.stringify(user);
     let headers = new HttpHeaders().set('Content-Type', 'application/json')
     return this._http.post(this.url+ 'people', params,{headers:headers})  
   }

   getLoanAprobed():Observable<User[]>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
    return this._http.get<User[]>(this.url + 'people?aprobed=true',{headers:headers})
   }
   getNotLoanAprobed():Observable<User[]>{
     let headers = new HttpHeaders().set('Content-Type', 'application/json')
     return this._http.get<User[]>(this.url + 'people?aprobed=false', {headers:headers})
   }
}
