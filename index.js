var sum = require('sum');
var multiply = require('multiply');
var square = require('modules/square');
var log = require('log');

console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('NODE_PATH:', process.env.NODE_PATH);

var a = 0.1;
var b = 0.2;

log(sum(a, b));
log(multiply(a, b));
log(square(b));
