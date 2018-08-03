const { split } = require('lodash')

module.exports = line => {
  const [time, name, value] = split(line, ' ')

  return { name, time, value: parseFloat(value) }
}
