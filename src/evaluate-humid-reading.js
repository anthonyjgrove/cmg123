const { get } = require('lodash')

const getPercentageDifference = require('./get-percent-difference')

module.exports = (resultsMap, name, value, reference) => {
  const currentEvaluation = get(resultsMap, name, null)

  if (currentEvaluation === 'discard' || getPercentageDifference(reference, value) > 1) {
    return 'discard'
  }

  return 'keep'
}
