const getPercentDifference = require('../src/get-percent-difference')

describe('get-percent-difference', () => {
  test('should export a function', () => {
    expect(getPercentDifference).toBeInstanceOf(Function)
  })
  test('should return the % difference between two numbers with decimals', () => {
    expect(getPercentDifference(100.1, 95.4)).toEqual(4.7)
  })
  test('should return the % difference in a postive number between two numbers where the first param is smaller', () => {
    expect(getPercentDifference(10, 100)).toEqual(90)
  })

  test('should return the % difference (test case 1)', () => {
    expect(getPercentDifference(45.0, 45.2)).toEqual(0.44)
  })

  test('should return the % difference (test case 2)', () => {
    expect(getPercentDifference(45.0, 45.3)).toEqual(0.66)
  })

  test('should return the % difference (test case 3)', () => {
    expect(getPercentDifference(45.0, 45.1)).toEqual(0.22)
  })
})
