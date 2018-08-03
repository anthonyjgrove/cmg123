const evaluateLogFile = require('../src')
const { readFileSync } = require('fs')

const testLogFile = readFileSync(`${process.cwd()}/__test__/test-log-file.txt`, 'utf8')

describe('evaluateLogFile', () => {
  test('should export a function', () => {
    expect(evaluateLogFile).toBeInstanceOf(Function)
  })

  test('should export the expected results from the provided test case', () => {
    expect(evaluateLogFile(testLogFile)).toEqual({
      'temp-1': 'precise',
      'temp-2': 'ultra precise',
      'hum-1': 'keep',
      'hum-2': 'discard'
    })
  })
})
