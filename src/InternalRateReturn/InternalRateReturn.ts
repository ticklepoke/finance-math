import { parseDecimalPlaces, parseRate, seekZero } from '../utils'

/**
 * Computes the IRR of a given array of cashflows
 * @param cashflow array of cashflows in chronological order (ie: [1,2,3] symbolizes 1 in the first period, 2 in the second period and 3 in 3rd period)
 * @returns IRR
 * @category IRR
 */
export function IRR (cashflow: number[]): number {
  let IRR: number = 0

  let positive = false
  let negative = false
  cashflow.forEach(item => {
    if (item < 0) negative = true
    if (item > 0) positive = true
  })
  if (!positive || !negative) {
    throw new Error('Need at least a positive and negative cashflow')
  }

  function NPV (rate: number): number {
    let NPV_value: number = 0
    cashflow.forEach((item, index) => {
      NPV_value += item / Math.pow(1 + rate, index + 1)
    })
    return NPV_value
  }

  IRR = seekZero(NPV)

  return parseDecimalPlaces(IRR, 2)
}
