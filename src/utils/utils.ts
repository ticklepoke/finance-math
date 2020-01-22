/**
 * @ignore
 * @param num
 * @param decPlaces
 */
export function parseDecimalPlaces (num: number, decPlaces: number): number {
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

export function parseRate (rate: number): number {
  // rate = parseFloat(rate)
  if (rate > 1) return rate / 100
  else return rate
}

export function seekZero (fn: Function): number {
  let x = 1
  while (fn(x) > 0) x++
  while (fn(x) < 0) x -= 0.01
  return (x += 0.01)
}
