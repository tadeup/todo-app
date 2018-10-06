var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {todo} = require('./models/todo');
var {user} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    console.log(req.body);
    var newTodo = new todo({
        text: req.body.text
    });

    newTodo
    .save()
    .then((doc) => {
        res.send(doc);
    }).catch((err) => {
        res.status(400).send(err)
    });
})

app.get('/todos', (req, res) => {
    todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    if(!ObjectID.isValid(id)){
        console.log('ID not valid');
        return res.status(404).send({});
    }

    todo.findById(id).then((Todo) => {
        console.log('cheguei aqui');
        if(Todo){
            res.send({Todo})
        } else {
            res.status(404).send({});
        }
    }).catch((e) => {
        console.log(e);
        res.status(400).send();
    });
});

app.listen(3000, () =>{
    console.log('Started on port 3000'); 
});

module.exports = {app}