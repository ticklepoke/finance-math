import { NPV } from './index'

it('Testing NPV', () => {
  expect(NPV(1, 1, [1, 2, 3])).toEqual(0.38)
})
