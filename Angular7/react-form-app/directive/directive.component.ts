import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
   numbers =[1,2,3,4,5,6,7,8,9];
   onlyOdd = false;
   num = 20
  constructor() { }

  ngOnInit() {
  }

}
