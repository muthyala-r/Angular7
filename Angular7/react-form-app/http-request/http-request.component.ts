import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-http-request',
  templateUrl: './http-request.component.html',
  styleUrls: ['./http-request.component.css']
})
export class HttpRequestComponent implements OnInit {
  
  private servers=[
    { 
      name:'Test Server',
      capacity:10,
      id:this.generateId()
    },
    { 
      name:'Live Server',
      capacity:100,
      id:this.generateId()
    }
  ];
  constructor(private serversService : ServersService) { }

  ngOnInit() {
  }

  generateId(): any {
    return Math.round(Math.random()*10000);
  }

  onAddServer(name:string){
      this.servers.push(
        {
          name:name,
          capacity:50,
          id:this.generateId()
        }
      );
  }

  onSave(){
     this.serversService.saveServers(this.servers)
     .subscribe(
       (response) => console.log(response),
       (error) => console.log(error)      
     );
  }
  onRecive(){
    this.serversService.getServersDetails()
    .subscribe(
      (serverData :any) => {
        //this.servers = serverData;
        console.log(serverData)
      },
      (errorInfo )=>{console.log(errorInfo);}
      );
  }
  onUpdate(){

  }

}
