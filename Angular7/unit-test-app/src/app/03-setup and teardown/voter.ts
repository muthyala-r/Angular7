export class Voter{
    totalVotes =0;
    upVote(){
        this.totalVotes++;

    }
    downVote(){
        this.totalVotes--;
    }
}