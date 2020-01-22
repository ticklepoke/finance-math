import { parseRate, parseDecimalPlaces } from '../utils/'

/**
 *
 * @param rate interest rate in decimals (i.e. 1% will be entered as 0.01)
 * @param initialInvestment initial investment amount of a project, entered as a positive value
 * @param cashflows array of cashflows in chronological order (ie: [1,2,3] symbolizes 1 in the first period, 2 in the second period and 3 in 3rd period)
 * @returns NPV
 * @category NPV
 */
export function NPV (
  rate: number,
  initialInvestment: number,
  cashflows: number[]
): number {
  rate = parseRate(rate)

  let npv_value: number = 0

  cashflows.forEach((item, index) => {
    npv_value += item / Math.pow(1 + rate, index + 1)
  })

  npv_value -= initialInvestment
  return parseDecimalPlaces(npv_value, 2)
}
