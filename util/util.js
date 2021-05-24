const convertToKg = (emisson) => {
  return emisson && Math.ceil(emisson / 1000)
}

module.exports = {
  convertToKg
}
