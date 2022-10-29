// console.log doesn't print anything on the page
// it is not meant to be visible to the user, but for you
// to help in debugging and getting visibility in your JS code.
//
// on Mac (using Chrome), use Option+Command+J to open the console and see this message.

// require ('./add.js');
// require ('./multiply.js');

const add = require ('./add.js');
const multiply = require ('./multiply.js');

console.log('Hello from the developer console!');

console.log(new Date());
console.log('hey!!!');
// console.log((2 + 2) * 4);
console.log(multiply(add(2, 2), 4));


