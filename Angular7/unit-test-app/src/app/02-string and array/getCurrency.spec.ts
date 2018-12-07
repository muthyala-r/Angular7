import {getCurrency} from './getCurrency'

describe('getCurrency',()=>{
    it('should return  the supported currencies',()=>{
        const test = getCurrency();
        expect(test).toContain('INR');
        expect(test).toContain('USD');
        expect(test).toContain('EUR');
        expect(test).toContain('SGD');
        expect(test).toContain('AUD');
        expect(test).toContain('MYR');
    })

})