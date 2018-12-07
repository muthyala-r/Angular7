import { Injectable } from '@angular/core';
import { resolve } from 'url';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  getDetails(){
    const result = new Promise(
    (resolve,reject) =>{
      setTimeout(()=>{
        resolve('Data')
      },2000)
    } 
    )
    return result;
  }
}
