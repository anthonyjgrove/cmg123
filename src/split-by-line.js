const { split } = require('lodash')

module.exports = arr => split(arr, /\r?\n/)
