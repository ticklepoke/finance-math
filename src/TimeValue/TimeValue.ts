/**
 * Computes the present value of a single cash flow
 * @param rate interest rate in decimals (i.e. 1% will be entered as 0.01)
 * @param cashflow value of single cashdflow
 * @param nper number of periods
 * @returns present value
 */
export function PVSingleCashFlow (
  rate: number,
  cashflow: number,
  nper: number
): number {
  rate = parseRate(rate)

  let pv_value: number = 0

  pv_value = cashflow / Math.pow(1 + rate, nper)

  pv_value = parseDecimalPlaces(pv_value, 2)
  return pv_value
}

/**
 * Computes the future value of a single cash flow
 * @param rate interest rate in decimals (i.e. 1% will be entered as 0.01)
 * @param cashflow value of single cashflow
 * @param nper number of periods
 * @returns future value
 */
export function FVSingleCashFlow (
  rate: number,
  cashflow: number,
  nper: number
): number {
  rate = parseRate(rate)
  let fv_value: number = 0
  fv_value = cashflow * Math.pow(1 + rate, nper)

  fv_value = parseDecimalPlaces(fv_value, 2)
  return fv_value
}

/**
 * Computes the Present Value of an array of n cashflows in chronological order on 0th period
 * @param rate interest rate in decimals (i.e. 1% will be entered as 0.01)
 * @param cashflow array of cashflows in chronological order (ie: [1,2,3] symbolizes 1 in the first period, 2 in the second period and 3 in 3rd period)
 */
export function PVMultiCashFlow (rate: number, cashflow: number[]): number {
  rate = parseRate(rate)

  let pv_value: number = 0
  cashflow.forEach((item, index) => {
    pv_value += item / Math.pow(1 + rate, index + 1)
  })

  return parseDecimalPlaces(pv_value, 2)
}

/**
 * Computes the Future Value of an array of n-1 cashflows in chronological order on nth period
 * @param rate interest rate in decimals (i.e. 1% will be entered as 0.01)
 * @param cashflow array of cashflows in chronological order (ie: [1,2,3] symbolizes 1 in the first period, 2 in the second period and 3 in 3rd period)
 */
export function FVMultiCashFlow (rate: number, cashflow: number[]): number {
  rate = parseRate(rate)

  let fv_value: number = 0
  cashflow.forEach((item, index) => {
    fv_value += item * Math.pow(1 + rate, cashflow.length - index)
  })

  return parseDecimalPlaces(fv_value, 2)
}

/**
 * Computes the present value of a series of perptuities with constant growth rate
 * @param rate interest rate in decimals (i.e. 1% will be entered as 0.01)
 * @param cashflow cashflow per period
 */
export function PVPerpetuity (rate: number, cashflow: number): number {
  let pv_value: number = 0

  rate = parseRate(rate)
  if (rate === 0) {
    return 0
  }

  pv_value = cashflow / rate

  return parseDecimalPlaces(pv_value, 2)
}

/**
 * Computes the present value of a series of perpetuities with growth rate and discount rate. Returns 0 if growth rate exceeds interest rate.
 * @param rate interest rate in decimals (i.e. 1% will be entered as 0.01)
 * @param cashflow cashflow per period
 * @param growth growth rate in decimals (i.e. 1% will be entered as 0.01)
 */
export function PVGrowingPerpetuity (
  rate: number,
  cashflow: number,
  growth: number
): number {
  rate = parseRate(rate)
  growth = parseRate(growth)
  let pv_value = 0

  if (rate <= growth) {
    return 0
  }

  pv_value = cashflow / (rate - growth)

  return parseDecimalPlaces(pv_value, 2)
}

/**
 * @ignore
 * @param num
 * @param decPlaces
 */
function parseDecimalPlaces (num: number, decPlaces: number): number {
  // let str = '' + Math.round(num * Math.pow(10, decPlaces))
  // while (str.length <= decPlaces) {
  //   str = '0' + str
  // }

  // const decPoint = str.length - decPlaces
  // return str.substring(0, decPoint) + '.' + str.substring(decPoint, str.length)

  num = Math.round(num * Math.pow(10, decPlaces)) / Math.pow(10, decPlaces)
  return num
}

/**
 * @ignore
 * @param rate
 */

function parseRate (rate: number): number {
  // rate = parseFloat(rate)
  if (rate > 1) return rate / 100
  else return rate
}

// module.exports = {
//   PV,
//   FV
// }
