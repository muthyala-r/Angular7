import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  private servers = [
    {instanceOf:'medium',name:'Production Server',status:'stable',started:new Date(15,1,2017)},
    {instanceOf:'large',name:'User Database',status:'stable',started:new Date(15,1,2017)},
    {instanceOf:'small',name:'Development Server',status:'offline',started:new Date(23,5,2016)},
    {instanceOf:'small',name:'Testing Environment Server',status:'stable',started:new Date(16,11,2017)}
  ];
  constructor() { }

  ngOnInit() {
  }

  getStatusClasses(server:{instanceOf:string,name:string,status:string,started:Date}){
    return {
      'list-group-item-success':server.status==='stable',
      'list-group-item-warning':server.status==='offline',
      'list-group-item-danger':server.status==='critical'
    }
  }
}
