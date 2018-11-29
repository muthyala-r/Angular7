import { Injectable } from '@angular/core';
import {Http} from '@angular/http'

@Injectable({
  providedIn: 'root'
})
export class ServersService {

  constructor(private http:Http) { }

  saveServers(servers :any[]){
     return this.http.post('https://ng-http-module-18738.firebaseio.com/data.json',servers);
  }

}
