// ast examples

const ast = require('tript-ast').default

const successor = ast.Function({
  name: 'successor',
  parameters: [ast.Parameter({ name: 'n', type: 'Number' })],
  body: ast.Sum({
    children: [
      ast.Reference({ name: 'n' }),
      ast.LiteralNumber({ value: 1 })
    ]
  })
})

const allZeroButOne = ast.Function({
  name: 'allZeroButOne',
  parameters: [
    ast.Parameter({ name: 'a', type: 'Number' }),
    ast.Parameter({ name: 'b', type: 'Number' }),
    ast.Parameter({ name: 'c', type: 'Number' })
  ],
  body: ast.Or({
    children: [
      ast.And({
        children: [
          ast.Equal({
            children: [
              ast.Reference({ name: 'a' }),
              ast.LiteralNumber({ value: 0 })
            ]
          }),
          ast.Equal({
            children: [
              ast.Reference({ name: 'b' }),
              ast.LiteralNumber({ value: 0 })
            ]
          }),
          ast.Equal({
            children: [
              ast.Reference({ name: 'c' }),
              ast.LiteralNumber({ value: 42 })
            ]
          })
        ]
      }),
      ast.And({
        children: [
          ast.Equal({
            children: [
              ast.Reference({ name: 'a' }),
              ast.LiteralNumber({ value: 0 })
            ]
          }),
          ast.Equal({
            children: [
              ast.Reference({ name: 'b' }),
              ast.LiteralNumber({ value: 42 })
            ]
          }),
          ast.Equal({
            children: [
              ast.Reference({ name: 'c' }),
              ast.LiteralNumber({ value: 0 })
            ]
          })
        ]
      }),
      ast.And({
        children: [
          ast.Equal({
            children: [
              ast.Reference({ name: 'a' }),
              ast.LiteralNumber({ value: 42 })
            ]
          }),
          ast.Equal({
            children: [
              ast.Reference({ name: 'b' }),
              ast.LiteralNumber({ value: 0 })
            ]
          }),
          ast.Equal({
            children: [
              ast.Reference({ name: 'c' }),
              ast.LiteralNumber({ value: 0 })
            ]
          })
        ]
      })
    ]
  })
})

if (!module.parent) {
  console.log(JSON.stringify(successor, null, 2))
  console.log(JSON.stringify(allZeroButOne, null, 2))
}
else {
  module.exports = { successor, allZeroButOne }
}
