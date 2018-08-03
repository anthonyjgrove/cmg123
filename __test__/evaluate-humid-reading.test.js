const evaluateHumidReading = require('../src/evaluate-humid-reading')

const reading1 = 45.2
const reading2 = 45.3
const reading3 = 45.1
const reading4 = 55.1

const ref = '45.0'

describe('evaluate-humid-reading', () => {
  test('should export a function', () => {
    expect(evaluateHumidReading).toBeInstanceOf(Function)
  })
  test('should return keep if difference less than 1 % (case 1)', () => {
    expect(evaluateHumidReading({}, 'hum-1', reading1, ref)).toEqual('keep')
  })
  test('should return keep if difference less than 1 % (case 2)', () => {
    expect(evaluateHumidReading({}, 'hum-1', reading2, ref)).toEqual('keep')
  })

  test('should return keep if difference less than 1 % (case 3)', () => {
    expect(evaluateHumidReading({ 'hum-1': 'keep' }, 'hum-1', reading3, ref)).toEqual('keep')
  })
  test('should return discard currentValue is discard', () => {
    expect(evaluateHumidReading({ 'hum-1': 'discard' }, 'hum-1', reading3, ref)).toEqual('discard')
  })
  test('should return discard if difference greater than 1 % (case 4)', () => {
    expect(evaluateHumidReading({ 'hum-1': 'keep' }, 'hum-1', reading4, ref)).toEqual('discard')
  })
})
