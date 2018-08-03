const fixJSMath = change => parseFloat(change.toFixed(4)) * 100

module.exports = (reference, value) => {
  if (reference < value) {
    return fixJSMath(Math.abs(reference - value) / value)
  }

  return fixJSMath(Math.abs(reference - value) / reference)
}
