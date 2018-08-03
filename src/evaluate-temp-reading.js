const { get, sum, map } = require('lodash')

module.exports = (resultsMap, name, reference) => {
  const { total, temps } = get(resultsMap, name, {})

  const len = temps.length
  const mean = total / len

  const stdDeviation = Math.sqrt(sum(map(temps, i => (i - mean) ** 2)) / len)

  if (mean - reference < 0.5) {
    if (stdDeviation < 3) {
      return 'ultra precise'
    } else if (stdDeviation < 5) {
      return 'very precise'
    }
  }

  return 'precise'
}
