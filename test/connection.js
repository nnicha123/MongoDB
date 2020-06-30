const mongoose = require('mongoose')

// connect to mongodb
mongoose.connect("mongodb://localhost/testaroo");

mongoose.connection.once('open',() => {
    console.log('Connection has been made!')
}).on('error',(error) => console.log('Connection Error! ', error))