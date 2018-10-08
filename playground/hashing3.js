const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';
bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
    });
});


var hashedPassword = "$2a$10$15kgv6PAXFQDE29.IO.Hvusb7ggOvvWo8O1y6J88IL/m7r/9BAV86";

bcrypt.compare("password", hashedPassword, (err, res) => {
    console.log(res);
});