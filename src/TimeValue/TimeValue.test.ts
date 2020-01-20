// const { PV, FV } = require('./index')
import { PV, FV } from './index'

it('PV should return 1', () => {
  expect(PV(1, 1, 1, 1)).toEqual(1)
})

it('PV should return 2', () => {
  expect(PV(0, 1, 1, 1)).toEqual(2)
})

it('PV should return 0.5', () => {
  expect(PV(1, 1, 0, 1)).toEqual(0.5)
})

it('FV should return 3', () => {
  expect(FV(1, 1, 1, 1)).toEqual(3)
})
