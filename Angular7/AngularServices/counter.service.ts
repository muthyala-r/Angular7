import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  activeToIncativeCount =0;
  inactiveToActiveCount = 0;
  constructor() { }

  incrementActiveToInactive(){
    this.activeToIncativeCount++;
    console.log('Active to Incative  : '+this.activeToIncativeCount);
  }

  incrementInactiveToActive(){
     this.inactiveToActiveCount ++;
     console.log('Inactive to active '+this.inactiveToActiveCount)
  }
}
