import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { ServersService } from '../servers/servers.service';
import { AuthService } from '../auth/auth.service';
import {map} from 'rxjs/operators';
import { Servers } from '../servers/servers.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http : HttpClient,
              private serversService : ServersService,
              private authService : AuthService) { }

  storeServer(){
    const token  = this.authService.getToken();
    const myHeader = new HttpHeaders()
    .set('authorization','done');
    const param = new HttpParams()
    .set('auth',token);

/*     return this.http.put('https://ng-http-module-18738.firebaseio.com/servers.json',
                         this.serversService.getServers(),{
                         observe : 'body',
                        headers : myHeader,
                        params :param }); */
  const req = new HttpRequest('PUT','https://ng-http-module-18738.firebaseio.com/servers.json',
  this.serversService.getServers(),{reportProgress:true,params:param});
  return this.http.request(req);
  }
  
  getServers(){
    const token = this.authService.getToken();
    this.http.get('https://ng-http-module-18738.firebaseio.com/servers.json?auth='+token
     ).pipe(
       map(
         (servers) => {
           console.log(servers);
           return servers;
         }
       )
     ).subscribe(
       (servers :Servers[]) =>
       {
         this.serversService.setServers(servers);
       }
     );
  }
  
  
}
