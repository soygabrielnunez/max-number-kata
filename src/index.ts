export function getMaxNumberFrom (numbers: Array<number>): number {
  let maxNumber = 0
  numbers.forEach(number => {
    if(maxNumber < number) {
      maxNumber = number
    }
  })
  return maxNumber
}
