db.posts.insert({
    title:'Post One',
    body:'Body of post one',
    category:'News',
    likes:4,
    tags:['news','events'],
    user:{
        name:'John Doe',
        statue:'author'
    },
    data:Date()
})

db.posts.insertMany([{
    title:'Post Two',
    body:'Body of post two',
    category:'Technology',
    date:Date()
},
{
    title:'Post Four',
    body:'Body of post four',
    category:'Entertainment',
    date:Date()
},
{
    title:'Post Two',
    body:'Body of post two',
    category:'Technology',
    date:Date()
}])

db.posts.update({title:'Post Two'},
{
    title:'Post Two',
    body:'New post 2 body',
    date: Date()
},{
    upsert:true
})

db.posts.update({title:'Post Two'},
{
    $set:{
        body:'Body of post two',
        category:'Technology'
    }
})

db.posts.update({title:'Post One'},
{
    $set:{
        comments: [
            {
                user:'Mary Williams',
                body:'Comment One',
                date: Date()
            },
            {
                user:'Harry White',
                body:'Comment Two',
                date:Date()
            }
        ]
    }
})

db.posts.find({
    $text:{
        $search:"\" Post 0\""
    }
})