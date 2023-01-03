module.exports = function reverse(int) {
    return parseInt(int.toString().split("").reverse().join(""))
}
