const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema 
const MarioCharSchema = new Schema({
    name:String,
    weight:Number
})
// Create Model based on the schema
const MarioChar = mongoose.model('mariochar',MarioCharSchema)
module.exports = MarioChar