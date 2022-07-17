import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  books:any = [];

  constructor(private _router:Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/books')
    .subscribe((books) => {
      this.books = books;
    });
  }

  moveToNew(){
    this._router.navigate(['/newbook']);
  }

}
