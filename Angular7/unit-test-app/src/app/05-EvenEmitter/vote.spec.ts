import {Vote} from './vote';

describe('Vote', ()=>{
    let component : Vote;
    beforeEach(()=>{
        component = new Vote();
    })

    it('should raise voteChanged event when call upVote()',()=>{
        let totalVotes = 0;
         component.voteChanged.subscribe(
            (voteCount) =>{
                totalVotes = voteCount;
            }
        ) 
        component.upVote();
       expect(totalVotes).toBe(501)
    })
    
    it('should decrement totalvotes when call downVote()',()=>{
        component.downVote();
        expect(component.totalVotes).not.toBe(500)
    })
})