import {describe, it} from 'mocha'
import { expect } from 'chai'
import { reduceDirections } from '../sujet3.js'


describe('Function that delete the useless path', ()=>{
    it('Should return the non useless path', ()=>{
        expect(reduceDirections(['NORD', 'SUD', 'SUD', 'EST', 'OUEST', 'NORD', 'OUEST'])).to.deep.equal(['OUEST']);
        expect(reduceDirections(['NORD', 'OUEST', 'SUD', 'NORD'])).to.deep.equal(['OUEST', 'NORD']);
    });

    it('Should return an empty array if all of the directions are useless', ()=>{
        expect(reduceDirections(['NORD', ' SUD', 'EST', 'OUEST'])).to.deep.equal([]);
        expect(reduceDirections(['NORD', 'SUD'])).to.deep.equal([]);
        expect(reduceDirections(['EST', 'OUEST'])).to.deep.equal([]);
    });

    it('Should return the same array if ther is no useless direction', ()=>{
        expect(reduceDirections(['NORD', 'OUEST'])).to.deep.equal(['NORD', 'OUEST']);
        expect(reduceDirections(['EST', 'SUD'])).to.deep.equal(['EST', 'SUD']);
    });

    it('Should return an empty array if the array in param is empty', ()=>{
        expect(reduceDirections([])).to.deep.equal([]);

    })

    it('Should throw an error if the  array is undefined or empty', ()=>{
        expect(()=>reduceDirections()).to.throw(Error);
    });
})

