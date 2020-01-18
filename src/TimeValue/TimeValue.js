export function PV (rate, nper, pmt, fv = 0, type) {
  nper = parseFloat(nper)
  pmt = parseFloat(pmt)
  rate = parseRate(rate)
  fv = parseFloat(fv)

  let pv_value

  if (nper === parseFloat(0)) {
    pv_value = 0
  }

  if (rate === parseFloat(0)) {
    pv_value = fv + pmt * nper
  } else {
    const x = Math.pow(1 + rate, -nper)
    const y = Math.pow(1 + rate, nper)
    pv_value = (x * (fv * rate - pmt + y * pmt)) / rate
  }

  pv_value = parseDecimalPlaces(pv_value, 2)

  return pv_value
}

function parseDecimalPlaces (num, decPlaces) {
  let str = '' + Math.round(parseFloat(num) * Math.pow(10, decPlaces))
  while (str.length <= decPlaces) {
    str = '0' + str
  }

  const decPoint = str.length - decPlaces
  return str.substring(0, decPoint) + '.' + str.substring(decPoint, str.length)
}

function parseRate (rate) {
  rate = parseFloat(rate)
  if (rate > 1) return parseFloat(rate / 100)
  else return parseFloat(rate)
}

// module.exports = {
//   PV
// }
