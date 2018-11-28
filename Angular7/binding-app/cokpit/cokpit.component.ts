import { Component, OnInit,EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
//import { emit } from 'cluster';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-cokpit',
  templateUrl: './cokpit.component.html',
  styleUrls: ['./cokpit.component.css']
})
export class CokpitComponent implements OnInit {
  @Output('srvCreated')
  serverCreated = new EventEmitter<{name: string, content: string}>();

  @Output('bpCreated')
  bluePrintCreated = new EventEmitter<{name: string, content: string}>();

 // newServerName = '';
  //newServerContent = '';
 @ViewChild('serverContentInput') serverContent : ElementRef;
  constructor() { }

  ngOnInit() {
  }
  onAddServer(newServerName : HTMLInputElement){
    this.serverCreated.emit({
       name : newServerName.value,
       content : this.serverContent.nativeElement.value
    });
  }
  onAddBluePrint(newServerName : HTMLInputElement){
    this.bluePrintCreated.emit({
       name : newServerName.value,
       content : this.serverContent.nativeElement.value
    })
  }
}
