import { parseDecimalPlaces, parseRate } from './index'

it('Checking 2 decimal places', () => {
  expect(parseDecimalPlaces(1.111, 2)).toEqual(1.11)
})

it('Checking 3 decimal places', () => {
  expect(parseDecimalPlaces(1.1115, 3)).toEqual(1.112)
})

it('Checking parse rate less than 1', () => {
  expect(parseRate(0.9)).toEqual(0.9)
})

it('Checking parse rate more than 1', () => {
  expect(parseRate(10)).toEqual(0.1)
})
