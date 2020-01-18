const { PV } = require('./index')

test('should return 1', () => {
  expect(PV(1, 1, 1, 1)).toEqual('1.00')
})
