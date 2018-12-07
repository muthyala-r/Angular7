import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private database:AngularFireDatabase) { }

  saveProduct(product){
    return this.database.list('/products').push(product)
  }

  getAllProducts(){
    return this.database.list('/products').valueChanges();
  }
}
