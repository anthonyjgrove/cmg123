const { reduce, get } = require('lodash')

const splitByLine = require('./split-by-line')
const getReferences = require('./get-references')
const getLogLineValues = require('./get-log-line-values')
const evaluateHumidReading = require('./evaluate-humid-reading')
const evaluateTempReading = require('./evaluate-temp-reading')

const isHumid = line => line.includes('hum-') && !line.includes('humidity')

const isTemp = line => line.includes('temp-') && !line.includes('thermometer')

const evaluateLogFile = logString => {
  const splitLog = splitByLine(logString)
  const { humidReference, thermoReference } = getReferences(splitLog)

  const partialResults = reduce(
    splitLog,
    (resultsMap, line) => {
      const { name, value } = getLogLineValues(line)

      if (isTemp(line)) {
        const currentTempMap = get(resultsMap, name, {})

        return Object.assign({}, resultsMap, {
          [name]: Object.assign({}, currentTempMap, {
            total: get(currentTempMap, 'total', 0) + value,
            temps: [].concat(get(currentTempMap, 'temps', []), [value])
          })
        })
      } else if (isHumid(line)) {
        return Object.assign({}, resultsMap, {
          [name]: evaluateHumidReading(resultsMap, name, value, humidReference)
        })
      }

      return resultsMap
    },
    {}
  )

  const results = reduce(
    Object.keys(partialResults),
    (resultsMap, name) => {
      if (isTemp(name)) {
        return Object.assign({}, resultsMap, {
          [name]: evaluateTempReading(resultsMap, name, thermoReference)
        })
      }

      return resultsMap
    },
    partialResults
  )

  return results
}

module.exports = evaluateLogFile
