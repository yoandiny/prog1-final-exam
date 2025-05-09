import {describe, it} from 'mocha'
import { expect } from 'chai'
import {getLastDelegation} from './sujet1.js'


describe('Function that give the last delegation to close the ceremonie', () => { 
    it('Should return the slowest delegation', ()=>{
        expect(getLastDelegation(['Chili 101 2', 'Estonia 58 1', 'Romania 102 3', 'Ecuador 103 4',
            'Madagascar 104 5', 'Oman 50 1', 'Nicaragua 51 3', 'Yemen 53 4'
        ])).to.equal('Estonia');

        expect(getLastDelegation(['Chili 101 2', 'France 150 3', 'Madagascar 100 5', 'Niger 50 1',
             'Allemagne 100 1'])).to.equal('Allemagne');
    });

    it('Should return the only delegation if there is only one', ()=>{
        expect(getLastDelegation(['Madagascar 101 2'])).to.equal('Madagascar');
    });
    it('Should reurn the slowest if there is only two delegation', ()=>{
        expect(getLastDelegation(['China 100 2', 'USA 100 1'])).to.equal('USA')
    });

    it('Should throw an error if the array is empty or undefined', ()=>{
        expect(()=>getLastDelegation(null)).to.throw("Array cannot be null or undefined");
        expect(()=>getLastDelegation(undefined)).to.throw("Array cannot be null or undefined");
    })
 })