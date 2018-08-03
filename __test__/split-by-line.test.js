const splitByLine = require('../src/split-by-line')
const { readFileSync } = require('fs')

const testLogFile = readFileSync(`${process.cwd()}/__test__/test-log-file.txt`, 'utf8')

describe('split-by-line', () => {
  test('should export a function', () => {
    expect(splitByLine).toBeInstanceOf(Function)
  })
  test('should split string on each new line', () => {
    expect(splitByLine(testLogFile)).toHaveLength(31)
  })
})
