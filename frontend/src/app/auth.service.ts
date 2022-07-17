import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userVerify(User:any){
    return this.http.post('http://localhost:3000/userlogin', User)
    .subscribe((data) =>{
      console.log('success')
    })
  }

  constructor(private http: HttpClient) { }
}
