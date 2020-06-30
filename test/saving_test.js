const assert = require('assert')
const MarioChar = require('../models/mariochar')
// Describe tests
describe('Saving records',() => {
    // Create tests
    it('saves a record to the database',(done) => {
        var char = new MarioChar({
            name:'Nicha',
            weight:45
        })
        char.save().then(() => {
            assert(char.isNew === false) //Check that its not new, already saved to database (because in the 'then' - should finish by now)
            done();
        })
    });
    // Next test
    
})