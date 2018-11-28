import { Component, OnInit } from '@angular/core';

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
  constructor() { }

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

}
