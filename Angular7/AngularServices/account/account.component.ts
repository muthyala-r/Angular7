import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../account.service';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent implements OnInit {
  @Input()  // subscriber observable
  account : {name :string,status:string};
  @Input()
  id : number;
  /* @Output() // publisher observable
  statusChanged  = new EventEmitter<{id : number,newStatus : string}>();
 */
  constructor(private accountService : AccountService) { }

  ngOnInit() {
  }
  onSetTo(status : string){
/*     this.statusChanged.emit({
      id : this.id,
      newStatus : status
    }); */
    this.accountService.updateStatus(this.id,status);
    this.accountService.statusUpdated.emit(status);
    //console.log('A server status changed , new status'+status+" id "+this.id)
    //this.logService.logStatusChanged(status);
  }

}
