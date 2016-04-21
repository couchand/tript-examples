// interpreter examples

const interp = require('tript-interp')
const examples = require('./ast')

const successor = interp(examples.successor)

const zero = {
  type: 'Number',
  value: 0
}

const one = successor([zero])
const two = successor([one])
const three = successor([two])

console.log('0:', zero)
console.log('1:', one)
console.log('2:', two)
console.log('3:', three)

const allZeroButOne = interp(examples.allZeroButOne)

const shouldBeTrue = [
  [0, 0, 42],
  [0, 42, 0],
  [42, 0, 0]
]

const shouldBeFalse = [
  [0, 42, 42],
  [42, 42, 0],
  [42, 0, 42],
  [42, 42, 42],
  [0, 0, 0]
]

const makeNumber = function (n) {
  return { type: 'Number', value: n }
}

shouldBeTrue.forEach(function (testCase) {
  const params = testCase.map(makeNumber)

  const result = allZeroButOne(params)

  console.log('should be true', result)
})

shouldBeFalse.forEach(function (testCase) {
  const params = testCase.map(makeNumber)

  const result = allZeroButOne(params)

  console.log('should be false', result)
})
