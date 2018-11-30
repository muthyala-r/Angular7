import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { Services } from '@angular/core/src/view';
import { AccountService } from '../account.service';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {
 /*  @Output()  
 
  accountAdded = new EventEmitter<{name:string, status:string}>();*/
  constructor(private accountService : AccountService) { 
    this.accountService.statusUpdated.subscribe(
      (status :string) => alert("New Status "+status)
    );
  }

  ngOnInit() {
  }

  onCreateAccount(accountName : string, accountStatus : string){
  /*   this.accountAdded.emit({
      name : accountName,
      status : accountStatus
    }); */
    this.accountService.addAccount(accountName,accountStatus);
    //console.log('A server status changed , new status: ' +accountStatus);
   // this.logService.logStatusChanged(status);
  }
  
}
