const {mongoose} = require('./../server/db/mongoose');
const {todo} = require('./../server/models/todo');

var id = '5bb7afb28fd5670710e5ae58';

// todo.find({
//     _id: id
// }).then((Todos) => {
//     console.log(Todos); 
// });

// todo.findOne({
//     _id: id
// }).then((Todo) => {
//     console.log(Todo); 
// });

todo.findById(id).then((Todo) => {
    if(!Todo){
        throw "couldnt find it";
    }
    console.log(Todo);
}).catch((err) => {
    console.log(err);
})