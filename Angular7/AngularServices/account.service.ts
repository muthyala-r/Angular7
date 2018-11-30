import { Injectable ,EventEmitter } from '@angular/core';
import { LoggingService } from './logging.service';
//import { EventEmitter } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private logService : LoggingService) { }

  accounts = [
    {name:'Master Account', status : 'active'},
    {name:'Test Account', status : 'inactive'},
    {name:'Hidden Account', status : 'hidden'},
  ]

  statusUpdated = new EventEmitter<string>();
  addAccount(name : string, status : string){
    this.accounts.push(
      {
        name : name,
        status : status
      }
    );
    this.logService.logStatusChanged(status);
  } 

 updateStatus(id : number,newStatus : string){
 this.accounts[id].status = newStatus;
 this.logService.logStatusChanged(newStatus);
 }
 
}
