import { Sum } from '../Sum'

describe("Test Sum", () =>{
    it('should return the Sum', ()=>{
        //arrange
        const sut = Sum;
        const expected = 30

        //act
        const actual = (sut(10,20))

        //assert
        expect(actual).toBe(expected);
    })

})