import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uesr-list',
  templateUrl: './uesr-list.component.html',
  styleUrls: ['./uesr-list.component.css']
})
export class UesrListComponent implements OnInit {

  users = [
    {name:'john'},
    {name:'peter'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
