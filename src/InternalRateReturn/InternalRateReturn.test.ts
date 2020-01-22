import { IRR } from './index'

it('Testing IRR', () => {
  expect(IRR([-1, 1, 1])).toEqual(0.62)
})
