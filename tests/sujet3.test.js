import {describe, it} from 'mocha'
import { expect } from 'chai'
import { reduceDirections } from '../sujet3.js'


describe('Function that delete the useless path', ()=>{
    it('Should return the non useless path', ()=>{
        expect(reduceDirections(['NORD', 'SUD', 'SUD', 'EST', 'OUEST', 'NORD', 'OUEST'])).to.equal(['OUEST']);
        expect(reduceDirections(['NORD', 'OUEST', 'SUD', 'NORD'])).to.equal(['OUEST', 'NORD']);
    });

    it('Should return an empty array if all of the directions are useless', ()=>{
        expect(reduceDirections(['NORD', ' SUD', 'EST', 'OUEST'])).to.equal([]);
        expect(reduceDirections(['NORD', 'SUD']));
        expect(reduceDirections(['EST', 'OUEST']));
    });

    it('Should return the same array if ther is no useless direction', ()=>{
        expect(reduceDirections(['NORD', 'OUEST'])).to.equal(['NORD', 'OUEST']);
        expect(reduceDirections(['EST', 'SUD'])).to.equal(['EST', 'SUD']);
    });

    it('Should return an empty array if the array in param is empty', ()=>{
        expect(reduceDirections([])).to.equal([]);

    })

    it('Should throw an error if the  array is undefined or empty', ()=>{
        expect(()=>reduceDirections()).to.throw(Error);
    });
})

