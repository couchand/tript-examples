const schema = require('tript-schema')
const ZSchema = require('z-schema')
const examples = require('./ast')

const validate = function(script) {
  const validator = new ZSchema()

  if (!validator.validate(script, schema)) {
    return {
      errors: validator.getLastErrors()
    }
  }

  return {
    value: true
  }
}

console.log('successor', validate(examples.successor))
console.log('allZeroButOne', validate(examples.allZeroButOne))
