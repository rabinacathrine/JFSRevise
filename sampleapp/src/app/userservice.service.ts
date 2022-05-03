import { Injectable } from '@angular/core';
// imprt{HttpClient} from '@angular/commo'
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }

  public getuser(){
return this.http.get('http://localhost:8080/getuser');
  }

  public adduser(user:Object):Observable<Object>{
    return this.http.post<Object>("http://localhost:8080/adduser",user)
  }
}
