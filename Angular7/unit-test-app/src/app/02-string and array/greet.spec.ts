import {greet} from './greet';
describe('greet',()=>{
    it('should include the name in the message',()=>{
        const test = greet('suma');
        expect(test).toBe('welcome to Mr./Ms. suma');
    })
    it('should contain the string  for ',()=>{
        const test =  greet('Angular');
        expect(test).toContain('Mr./Ms.');
    })

})
