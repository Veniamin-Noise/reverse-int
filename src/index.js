module.exports = function reverse (int) {
  return Number(Math.abs(int).toString().split("").reverse().join(""))
}
