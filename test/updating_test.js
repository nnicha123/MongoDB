const assert = require('assert')
const MarioChar = require('../models/mariochar')
// Describe tests
describe('Updating records',() => {

    let char;

    beforeEach((done) => {
            char = new MarioChar({
            name:'Nicha',
            weight:45
        })
        char.save().then(() => {
            done();
        })
    })

    // Create tests
    it('Update one record from the database',(done) => {
        MarioChar.findOneAndUpdate({name:'Nicha'},{name:'Luigi'}).then(() => {
            MarioChar.findOne({_id:char._id}).then((result) => {
                assert(result.name === 'Luigi')
                done()
            })
        })
    });

    it('Increments the weight by one',(done) => {
        MarioChar.update({}, {$inc: {weight:1}}).then(() => {
            MarioChar.findOne({name:'Nicha'}).then((record) => {
                assert(record.weight === 46)
                done()
            })
        })
    });
    
    // Next test
    
})