import { describe, it, expect } from 'vitest'
import { HelloWorld } from './main'

describe('main.ts', () => {
  it('should say hello world', () => {
    expect(HelloWorld()).toBe('Hello, World!')
  })
})
