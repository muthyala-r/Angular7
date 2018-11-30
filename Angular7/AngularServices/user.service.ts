import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  activeUsers = ['Sundar','Raju','Muthyala'];
  inActiveUsers = ['Tony','Tom','Jack'];
  constructor(private counterService : CounterService) { }

  setToInactive(id : number){
    this.inActiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id,1);
    this.counterService.incrementActiveToInactive();
  }

  setToActive(id : number){
    this.activeUsers.push(this.inActiveUsers[id]);
    this.inActiveUsers.splice(id,1);
    this.counterService.incrementInactiveToActive();
  }


}
