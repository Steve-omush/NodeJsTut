//Node runs on a server - not in a browser
//Console is in the terminal window (not in browser window)
//console.log("Hello World!");
//Node uses a global instead of window object
//console.log(global);
//common core modules that relate to OS
//use Commonjs modules instead of ES6. uses a require statement

//** Missing some JS APIs Like Fetch */
const os = require('os');
const path = require('path');
const { add, subtract, multiply, divide, toPOwer } = require('./math');

console.log(add(2, 3));
console.log(subtract(2, 3));
console.log(multiply(2, 3));
console.log(divide(2, 3));

// console.log(os.type());
// console.log(os.version());

// console.log(__dirname);
// console.log(__filename);
// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));
// console.log(path.parse(__filename));