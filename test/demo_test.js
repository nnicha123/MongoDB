const mocha = require('mocha')
const assert = require('assert')
// Describe tests
describe('some demo test',() => {
    // Create tests
    it('adds two numbers together',() => {
        assert( 2 + 3 === 5)
    })
    it('try two numbers together',() => {
        assert( 2 + 4 === 5)
    })
})