import {Voter} from './voter';

describe('Voter', ()=>{
    let component : Voter;
    beforeEach(()=>{
        component = new Voter();
    })

    it('should increment totalvotes when call upVote()',()=>{
       component.upVote();
       expect(component.totalVotes).toBe(1)
    })
    
    it('should decrement totalvotes when call downVote()',()=>{
        component.downVote();
        expect(component.totalVotes).toBe(-1)
    })
})