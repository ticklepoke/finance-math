// const { PV, FV } = require('./index')
import {
  PVSingleCashFlow,
  FVSingleCashFlow,
  PVMultiCashFlow,
  FVMultiCashFlow,
  PVGrowingPerpetuity
} from './index'

it('PV should return 0.5', () => {
  expect(PVSingleCashFlow(1, 1, 1)).toEqual(0.5)
})

it('PV should return 1', () => {
  expect(PVSingleCashFlow(0, 1, 1)).toEqual(1)
})

it('PV should return 1 (v2)', () => {
  expect(PVSingleCashFlow(1, 1, 0)).toEqual(1)
})

it('PV should return 0', () => {
  expect(PVSingleCashFlow(1, 0, 1)).toEqual(0)
})

it('FV should return 2', () => {
  expect(FVSingleCashFlow(1, 1, 1)).toEqual(2)
})

it('PV multi cash flow test', () => {
  expect(PVMultiCashFlow(1, [1, 2, 3])).toEqual(1.38)
})

it('FV multi cash flow test', () => {
  expect(FVMultiCashFlow(1, [1, 2, 3])).toEqual(22)
})

it('PV Growing perp test', () => {
  expect(PVGrowingPerpetuity(1, 1, 0.5)).toEqual(2)
})
