// examples of code compilation

const compile = require('tript-compile')
const examples = require('./ast')

console.log('successor')
console.log(compile(examples.successor))

console.log('allZeroButOne')
console.log(compile(examples.allZeroButOne))
