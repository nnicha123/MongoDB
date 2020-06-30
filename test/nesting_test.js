const mongoose = require('mongoose')
const assert = require('assert')
const Author = require('../models/author')

// Describe tests
describe('Nesting records',() => {

    beforeEach((done) => {
        mongoose.connection.collections.authors.drop(() => {
            done()
        })
    })

    // Create tests
    it('Creates an author with sub-documents',(done)=> {
        let pat = new Author({
            name:'Patrick Rothfuss',
            books:[{title:'Harry Potter',pages:1000}]
        })
        pat.save().then(() => {
            Author.findOne({name:'Patrick Rothfuss'}).then((record) => {
                assert(record.books.length === 1)
                done()
            })
        })
    })

    it('Adds a book to an author',(done) => {
        let pat = new Author({
            name:'Patrick Rothfuss',
            books:[{title:'Harry Potter',pages:1000}]
        })
        pat.save().then(() => {
            Author.findOne({name:'Patrick Rothfuss'}).then((record) => {
                // add a book to the books array
                record.books.push({title:"Wise Man's Fear",pages:500})
                record.save().then(() => {
                    Author.findOne({name:'Patrick Rothfuss'}).then((result) => {
                        assert(result.books.length === 2)
                        done()
                    })
                })
            })
        })
    })
    
})