const mongoose = require('mongoose')

// ES6 promises
mongoose.Promise = global.Promise //using the ES6 default promise instead of mongoose promise (to get rid of warning)

// Connect to the db before tests run, async so don't know when done, pass done as a parameter and call done after finishes connection
before((done) => {
    // connect to mongodb
    mongoose.connect("mongodb://localhost/testaroo");
    mongoose.connection.once('open', () => {
        console.log('Connection has been made!')
        done()
    }).on('error', (error) => console.log('Connection Error! ', error)) //on used to watch our for error everytime, once used to establish connection only at the start
    
});

// Drops the characters collection everytime before each test
beforeEach((done) => {
    // Drop the collection
    mongoose.connection.collections.mariochars.drop(() => {
        done()
    })
    
})
