import { describe, it, expect } from 'vitest'
import { getMaxNumberFrom } from '.'

describe('index', () => {
  it('should get the max number in the array', () => {
    let numbers = [2, 89, 100, 90, 8]

    const result = getMaxNumberFrom(numbers)
    
    expect(result).toBe(100)
  })
})
