import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})
export class UsersignupComponent implements OnInit {

  registerForm:FormGroup = new FormGroup({
    uname: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.email, Validators.required]),
    password: new FormControl('',Validators.required),
    repass: new FormControl('',Validators.required)
  });

  fname: string | any;
  email: string | any;
  password: string | any;
  repass: string | any;

  constructor(private _router:Router, public http:HttpClient) { }

  ngOnInit(): void {
  
  }

  moveToLogin(){
    this._router.navigate(['/login']);
  }

  
  register(): void{
    const { fname, email, password } = this;
    this.http.post('http://localhost:3000/users', {
      fname,
      email,
      password,
      
    }, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).subscribe((user) => {
      this.fname = null;
      this.email = null;
      this.password = null;
      this.repass = null;

      alert('User added successfully');
    });
    
  }
  
   
}
