import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
 private baseUrl = "http://localhost:8080/shopping/category"
  constructor(private database : AngularFireDatabase,
              private http :HttpClient ) { 

  }
  getCategories(){
   return this.database.list('/category').valueChanges();
  }
  getCategory():Observable{
    this.http.get(this.baseUrl);
  }
}
