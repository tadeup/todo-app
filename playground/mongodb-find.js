const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/todoApp', (err, client) => {
    if(err) return console.log('Unable to connect to mongo server');
    console.log('Connected to mongo server');
    const db = client.db('todoApp');

    // db.collection('Users')
    // .find({_id: new ObjectID("5bb412057286d86227d6b486")})
    // .toArray()
    // .then((docs) => {
    //     console.log('todos: ');
    //     console.log(JSON.stringify(docs, undefined, 2));
        
    // }, (err) => {
    //     console.log('unable to fetch todos: ', err);
    // });

    db.collection('Users')
    .find()
    .count()
    .then((count) => {
        console.log('todos count: ');
        console.log(count);
        
    }, (err) => {
        console.log('unable to fetch todos: ', err);
    });

    // client.close();
})