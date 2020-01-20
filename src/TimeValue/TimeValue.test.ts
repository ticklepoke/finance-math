const { PV } = require('./index')

it('should return 1', () => {
  expect(PV(1, 1, 1, 1)).toEqual(1)
})

it('should return 2', () => {
  expect(PV(0, 1, 1, 1)).toEqual(2)
})

it('should return 0.5', () => {
  expect(PV(1, 1, 0, 1)).toEqual(0.5)
})
