import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  title = "FormLogin";
  User = { 
    emailid: null,
    pwd: null
  };
  
  // loginForm: FormGroup = new FormGroup({
  //   email: new FormControl('', [Validators.email, Validators.required]),
  //   password: new FormControl('', Validators.required)
  // });

  constructor(private _router:Router, private _auth:AuthService) { }

  ngOnInit(): void {
  }

  moveToRegister(){
    this._router.navigate(['/signup']);
  }

  moveToDashtemp(){
    this._router.navigate(['/dashboard']);
  }


  userVerify(){
    // this._auth.userVerify(this.User);
    // console.log("Logged in successfully");
  }

}
