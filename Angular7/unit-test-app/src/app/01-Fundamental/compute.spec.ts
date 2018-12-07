import {compute} from './compute';

describe('compute',()=>{
    it('should return 0 if input value is -ve',()=>{
        const test = compute(-5);
        expect(compute(test)).toBe(0);
    })
    it('should increment the input  if it is positive',()=>{
        const test =  compute(5);
        expect(compute(test)).toBe(5);
    })

})

