const { split, get } = require('lodash')

module.exports = splitLog => {
  const referenceArr = split(get(splitLog, '[0]'), ' ')

  return {
    thermoReference: parseFloat(get(referenceArr, '[1]')),
    humidReference: parseFloat(get(referenceArr, '[2]'))
  }
}
