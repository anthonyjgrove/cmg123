const getLogLineValues = require('../src/get-log-line-values')

const logLine1 = '2007-04-05T22:00 temp-1 72.4'

const logLine2 = '2007-04-05T22:08 hum-2 42.1'

describe('get-log-line-values', () => {
  test('should export a function', () => {
    expect(getLogLineValues).toBeInstanceOf(Function)
  })
  test('should return the sensor name, value, and time of a given log for temp sensor', () => {
    expect(getLogLineValues(logLine1)).toEqual({ name: 'temp-1', value: 72.4, time: '2007-04-05T22:00' })
  })
  test('should return the sensor name, value, and time of a given log for humid sensor', () => {
    expect(getLogLineValues(logLine2)).toEqual({ name: 'hum-2', value: 42.1, time: '2007-04-05T22:08' })
  })
})
