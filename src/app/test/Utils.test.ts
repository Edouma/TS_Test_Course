import { getStringInfo, toUpperCase } from "../Utils"

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

    it('should return info for valid string', () =>{
        const actual = getStringInfo('My-String');

        expect(actual.lowerCase).toBe('my-string');
        expect(actual.extraInfo).toEqual({});

        expect(actual.characters.length).toBe(9);
        expect(actual.characters).toHaveLength(9);

    })
})