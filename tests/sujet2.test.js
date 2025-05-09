import {describe, it} from 'mocha'
import { expect } from 'chai'

describe('Function that return the maximum of bobsleighs that can be placed in a park', ()=>{
    it('Should return 0 if there is no place to put any bobsleigh', ()=>{
        expect(countMaxBobsleigh(3, [
            "...",
            "X.X",
            ".X."
        ])).to.equal(0);
        
        expect(countMaxBobsleigh(1,[
            "."
        ])).to.equal(0);
    });
    it("Should return the maximum of bobsleigh in a park", ()=>{
        expect(countMaxBobsleigh(4, [
            "X...",
            "....",
            "...X",
            "...."
        ])).to.equal(2);
        expect(countMaxBobsleigh(5, [
            "....X",
            "X....",
            ".....",
            "..X..",
            "X...X"
        ])).to.equal(3);
    });

    it('Should throw an error if the array is empty or undefined or if any param is missing', ()=>{
        expect(()=>countMaxBobsleigh(4, [])).to.throw(Error);
        expect(()=>countMaxBobsleigh(4)).to.throw(Error);
        expect(()=>countMaxBobsleigh([
            "..."
        ])).to.throw(Error);
        
    });


    
})