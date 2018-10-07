const {SHA256} = require('crypto-js');

var message = "i am user number 3";
var hash = SHA256(message).toString();

console.log(`Message is: ${message}`);
console.log(`Hash is: ${hash}`);

var data = {
    id: 4
};

var token = {
    data,
    hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
}

var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

if(resultHash === token.hash){
    console.log('Data was not changed');
} else {
    console.log('Data was changed');
}

var resultHash = SHA256(JSON.stringify(token.data)).toString();

if(resultHash === token.hash){
    console.log('Data was not changed');
} else {
    console.log('Data was changed');
}