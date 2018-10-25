import {
  sum,
  getKey,
  average,
  isNaNDefault,
  insightAverage
} from '../array'

describe('sum', () => {
  it('should sum an array of numbers', () => {
    expect(sum([1, 2, 3, 4])).toBe(10)
  })
})

describe('getKey', () => {
  it('should retrieve a list of keys from an array', () => {
    const fn = getKey('test')
    expect(fn([{test: 1}, {test: 2}, {test: 3}])).toEqual([1, 2, 3])
  })
})

describe('average', () => {
  it('should return the average from an array', () => {
    expect(average([1, 1, 2, 2, 3])).toBe(1.8)
  })
})

describe('isNaNDefault', () => {
  it('should return fallback if n isNaN', () => {
    expect(isNaNDefault('AHHHH', 123)).toBe(123)
  })
  it('should return n if n !isNaN', () => {
    expect(isNaNDefault(345, 123)).toBe(345)
  })
})

describe('insightAverage', () => {
  it('should return the average mood', () => {
    const values = [
      {mood: 1}, {mood: 2}, {mood: 3}, {mood: 4}
    ]
    expect(insightAverage(values)).toBe(2.5)
  })
  it('should return 0 by default', () => {
    expect(insightAverage([])).toBe(0)
  })
})