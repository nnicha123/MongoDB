const assert = require('assert')
const MarioChar = require('../models/mariochar')
// Describe tests
describe('Finding records',() => {

    beforeEach((done) => {
        var char = new MarioChar({
            name:'Nicha',
            weight:45
        })
        char.save().then(() => {
            assert(char.isNew === false) //Check that its not new, already saved to database (because in the 'then' - should finish by now)
            done();
        })
    })

    // Create tests
    it('Find one record from the database',(done) => {
        MarioChar.findOne({name:'Nicha'}).then((result)=>{
            assert(result.name === 'Nicha')
            done()
        })
    });
    // Next test
    
})