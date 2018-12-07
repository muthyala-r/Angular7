import { Output,EventEmitter } from '@angular/core'

export class Vote{
    totalVotes =500;
    @Output() voteChanged = new EventEmitter();
    upVote(){
        this.totalVotes++;
        this.voteChanged.emit(this.totalVotes);
    }
    downVote(){
        this.totalVotes--;
        this.voteChanged.emit(this.totalVotes);
    }
}