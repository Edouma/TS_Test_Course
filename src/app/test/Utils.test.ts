import { toUpperCase } from "../Utils"

describe('Utils test ', ()=>{
    it('should return uppercase', () => {
        //arrage
        const sut = toUpperCase;
        const expected = 'ABC'

        //act
        const actual = sut('abc')
        
        //assert
        expect(actual).toBe(expected);
    })
})