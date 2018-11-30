import { Component, OnInit, Pipe } from '@angular/core';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})

export class PipesComponent implements OnInit {
  appStatus = new Promise(
    (resolve,reject) => {
      setTimeout(
        ( )=>{ resolve('statble');},
        2000
      )
    }
  )
  private servers = [
    {instanceOf:'medium',name:'Production Server',status:'stable',started:new Date(2017,0,15)},
    {instanceOf:'large',name:'User Database',status:'stable',started:new Date(2017,3,30)},
    {instanceOf:'small',name:'Development Server',status:'offline',started:new Date(2016,30,24)},
    {instanceOf:'small',name:'Testing Environment Server',status:'critical',started:new Date(2017,1,28)}
  ];
  filterStatus = '';
  constructor() { }

  ngOnInit() {
  }

  getStatusClasses(server:{instanceOf:string,
                           name:string,
                           status:string,
                           started:Date}){
    return {
      'list-group-item-success':server.status==='stable',
      'list-group-item-warning':server.status==='offline',
      'list-group-item-danger':server.status==='critical'
    }
  }

  onAddServer(){
    this.servers.push({
      instanceOf:'medium',name:'Production Server',status:'stable',started:new Date(2017,0,15)
    })
  }
}
