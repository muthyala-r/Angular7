import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  private server : {id : number,name : string,status :string};
  private mysubscrtion :Subscription
  constructor(private serversService : ServersService
              ,private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id']
    this.server = this.serversService.getServer(id);

    this.mysubscrtion =  this.route.params.subscribe(
      (params :Params) =>{
        this.server = this.serversService.getServer(+params['id'])
      }
    )
  }

  onEditServer(){
    this.router.navigate(['edit'],{relativeTo : this.route})
  }

  ngOnDestroy(){
    this.mysubscrtion.unsubscribe();
  }

}
