import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 serverElements = [
   {type : 'server', name : 'angular' , content :'js framework'}
 ];

 onAddedServer(serverData){
   this.serverElements.push({
     type : 'server',
     name : serverData.name,
     content : serverData.content
   });
 }

 onAddedBluePrint(blueprintData){
  this.serverElements.push({
    type : 'blueprint',
    name : blueprintData.name,
    content : blueprintData.content
  });
 }
 onChangeFirst(){
  this.serverElements[0].name = "Spring boot";
 }
 onDestroyElement(){
   this.serverElements.splice(0,1);
 }

}
