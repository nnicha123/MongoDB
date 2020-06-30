const assert = require('assert')
const MarioChar = require('../models/mariochar')
// Describe tests
describe('Finding records',() => {

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
    it('Finds one record by name from the database',(done) => {
        MarioChar.findOne({name:'Nicha'}).then((result)=>{
            assert(result.name === 'Nicha')
            done()
        })
    });

    it('Finds one record by id from the database',(done) => {
        MarioChar.findOne({_id:char._id}).then((result)=>{
            assert(result._id.toString() === char._id.toString())
            done()
        })
    });
    // Next test
    
})