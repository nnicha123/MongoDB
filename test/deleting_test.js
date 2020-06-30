const assert = require('assert')
const MarioChar = require('../models/mariochar')
// Describe tests
describe('Deleting records',() => {

    let char;

    beforeEach((done) => {
            char = new MarioChar({
            name:'Nicha',
            weight:45
        })
        char.save().then(() => {
            assert(char.isNew === false) //Check that its not new, already saved to database (because in the 'then' - should finish by now)
            done();
        })
    })

    // Create tests
    it('Delete one record from the database',(done) => {
        MarioChar.findOneAndRemove({name:'Nicha'}).then(() => {
            MarioChar.findOne({name:'Nicha'}).then((result) => {
                assert(result === null)
                done()
            })
        })
    });

    
    // Next test
    
})