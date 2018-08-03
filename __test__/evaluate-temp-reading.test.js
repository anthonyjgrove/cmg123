const evaluateHumidReading = require('../src/evaluate-humid-reading')

describe('evaluate-temp-reading', () => {
  test('should export a function', () => {
    expect(evaluateHumidReading).toBeInstanceOf(Function)
  })
})
