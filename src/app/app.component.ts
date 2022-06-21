import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//import autosmoviles from "src/data/db.json";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



// manejo de data
  title = 'cards-angular';
  data: any[] = [];

  constructor(
    private http: HttpClient
  ){}

  ngOnInit(){
    this.http.get('http://localhost:3000/api/automoviles')
    .subscribe((data: any) => {
      this.data = data;
      console.log(data);
    })
  }
  
}


