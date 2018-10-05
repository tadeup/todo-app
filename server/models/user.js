var mongoose = require('mongoose');

var user = mongoose.model('user', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
})

module.exports = {user}

// var newUser = new user({
//     email: ''
// })

// newUser
// .save()
// .then((doc) => {
//     console.log(doc);
    
// }).catch((err) => {
//     console.log('Unable to save user');
    
// });