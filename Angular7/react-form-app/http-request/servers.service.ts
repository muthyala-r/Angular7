import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ServersService {

  constructor(private http:HttpClient) { }

  saveServers(servers :any[]){
    const header = new HttpHeaders({'ContentType':'application/json'})
     return this.http.post('https://ng-http-module-18738.firebaseio.com/data.json',servers,{headers :header});
  }
  getServersDetails(){
    return this.http.get('https://ng-http-module-18738.firebaseio.com/data.json')
    .pipe(map(
      (response : Response) =>{
        const data = response;
        console.log(data);
        return data;
      },
      (error) => {
        throw Observable.throw('something Went Wrong' + error);
      }
    )
    );
  }

  updateServers(servers: any){
    const header = new HttpHeaders({'ContentType':'application/json'})
    return  this.http.put('https://ng-http-module-18738.firebaseio.com/data.json',servers,{headers :header});
  }
}
