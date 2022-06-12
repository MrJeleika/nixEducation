let hexToDec = function (hexNum) {
  let hexLetters = {
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15
  }
  hexNum = hexNum.split('').reverse()
  for (let i = 0; i < hexNum.length; i++) {
    if (isFinite(+hexNum[i])) {
      hexNum[i] = +hexNum[i] * Math.pow(16, i)
    } else {
      hexNum[i] = hexLetters[hexNum[i].toUpperCase()] * Math.pow(16, i)
    }
  }
  return hexNum.reduce((i, c) => i + c)
}
