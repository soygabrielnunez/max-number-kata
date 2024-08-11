export function getMaxNumberFrom (numbers) {
  let maxNumber = 0
  let size = numbers.length
  for(let i = 0; i < size; i++) {
    if(maxNumber < numbers[i]) {
      maxNumber = numbers[i]
    }
  }
  return maxNumber
}
