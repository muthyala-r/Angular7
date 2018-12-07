import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Servers } from './servers.model';

@Injectable({
  providedIn: 'root'
})
export class ServersService {
  serverChanged = new Subject<Servers[]>();
  private servers:Servers[] = [
    {id : 1 ,name : 'Production Server',status:'online'},
    {id : 2 ,name : 'Testing Server',status:'offline'},
    {id : 3 ,name : 'Development Server',status:'offline'}
]
  constructor() { }

  setServers(servers : Servers[]){
    this.servers = servers;
    this.serverChanged.next(this.servers.slice())
  }
  getServers(){
    return this.servers.slice();
  }
  getServer(id : number){
     const server =this.servers.find(
       (s) => {
         return s.id === id;
       }
     );

     return server;
  }

  updateServer(id : number ,
               serverInfo :{name : string,status:string}){
    const server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
    if(server){
      server.name = serverInfo.name;
      server.status = serverInfo.status;
    }
     
  }
}
