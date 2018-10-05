// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//  o codigo acima funciona por causa dos object destructuring do ES6
// var user = {name: 'tadeu', age: 22};
// var {name} = user;
// console.log(name);

var obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/todoApp', (err, client) => {
    if(err){
        return console.log('Unnable to connect to mongodb server');
    }

    console.log('Connected to mongodb server');
    const db = client.db('todoApp');

    // db.collection('todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo');
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        name: 'tadeup',
        age: 22,
        location: 'sao paulo'
    }, (err, result) => {
        if(err) return console.log('Unable to isert one');
        console.log(result.ops[0]._id.getTimestamp());
    });
    client.close();
});