export function PV (
  rate: number,
  nper: number,
  pmt: number,
  fv: number = 0,
  type: number = 0
): number {
  rate = parseRate(rate)

  let pv_value

  if (nper === 0) {
    pv_value = 0
  }

  if (rate === 0) {
    pv_value = fv + pmt * nper
  } else {
    const x = Math.pow(1 + rate, -nper)
    const y = Math.pow(1 + rate, nper)
    pv_value = (x * (fv * rate - pmt + y * pmt)) / rate
  }

  pv_value = parseDecimalPlaces(pv_value, 2)

  return pv_value
}

export function FV (
  rate: number,
  nper: number,
  pmt: number,
  pv: number = 0,
  type: number = 0
) {
  rate = parseRate(rate)

  let fv

  const pow = Math.pow(1 + rate, nper)

  if (rate) {
    fv = -((pmt * (1 + rate * type) * (1 - pow)) / rate - pv * pow)
  } else {
    fv = 1 * (pv + pmt * nper)
  }

  return parseDecimalPlaces(fv, 2)
}

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

function parseRate (rate: number): number {
  // rate = parseFloat(rate)
  if (rate > 1) return rate / 100
  else return rate
}

// module.exports = {
//   PV,
//   FV
// }
