import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit ,OnDestroy{
  
  username:any
  sub : Subscription
  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
  this.sub = this.route.params.subscribe(
    params => this.username = params['name']
  )
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

}
