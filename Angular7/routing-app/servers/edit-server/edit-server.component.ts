import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  private server  :{id:number,name :string,status:string};
  serverName :string;
  serverStatus : string;
  mysubscrtion : Subscription
  constructor(private serversServer : ServersService,
    private route : ActivatedRoute) { }

  ngOnInit() {
  /*   this.server = this.serversServer.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status; */
    this.mysubscrtion =  this.route.params.subscribe(
      (params :Params) =>{
        this.server = this.serversServer.getServer(+params['id'])
        this.serverName = this.server.name
        this.serverStatus = this.server.status
      }
    )
  }
  onUpdateServer(){
    this.serversServer.updateServer(this.server.id,
                                    {name:this.serverName,
                                    status :this.serverStatus});
  }

}
