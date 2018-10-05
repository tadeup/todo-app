var mongoose = require('mongoose');

var todo = mongoose.model('todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

module.exports = {
    'todo': todo
}

// var newTodo = new todo({
//     text: '    ata'
// });

// newTodo
// .save()
// .then((doc) => {
//     console.log('Saved todo', doc);
    
// }).catch((err) => {
//     console.log('unable to save todo');
    
// });

