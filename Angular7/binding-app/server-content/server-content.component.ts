import { Component, OnInit, Input, OnChanges, ViewChild, ElementRef, DoCheck, AfterContentInit, AfterContentChecked, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-content',
  templateUrl: './server-content.component.html',
  styleUrls: ['./server-content.component.css']
})
export class ServerContentComponent implements OnInit ,OnChanges,
DoCheck{
  
  
 
  @Input()
   element: {type:string,name:string,content:string};
   @ViewChild('heading') header : ElementRef;
   @ContentChild('paragraphContent') paragraphContent : ElementRef;
  constructor() {
    console.log('Constructor is called');
   }
  
  ngOnInit() {
    console.log('ngOnInit is called');
    console.log('paragraph '+this.paragraphContent.nativeElement.texContent);
   
  }

  ngOnChanges(changes: import("c:/Users/admin/Angular7/bindingapp/node_modules/@angular/core/src/metadata/lifecycle_hooks").SimpleChanges): void {
    console.log('ngOnChanges is called');
    console.log('changes ',changes);
    
  }
  ngDoCheck(): void {
    console.log("ngDoCheck called ");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called ");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked called ");
  }
  ngAfterViewInit(){
    console.log(' ngAfterViewInit called');
    console.log('Text Content' +this.header.nativeElement.texContent);
  }
 ngAfterViewChecked(){
  console.log("ngAfterViewChecked called ");
 }
 ngOnDestroy(){
   console.log("ngOnDestroy called");
 }

}
