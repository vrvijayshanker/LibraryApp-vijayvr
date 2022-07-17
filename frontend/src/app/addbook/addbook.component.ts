import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})

export class AddbookComponent implements OnInit {

  title: string | any;
  author: string | any;
  description: string | any;

  constructor(private _router:Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  moveToDash(){
    this._router.navigate(['/dashboard']);
  }

  onSave(): void{
    const { title, author, description } = this;
    this.http.post('http://localhost:3000/books', {
      title,
      author,
      description
    }, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).subscribe((book) => {
      this.title = null;
      this.author = null;
      this.description = null;

      alert('Book added successfully');
    });
    
  }

}
