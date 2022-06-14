let spacey = function (arr) {
  for (let i = 0; i < arr.length-1; i++) {
    arr[i+1] = arr[i] + arr[i+1];
  }
  return arr
}
console.log(spacey(['kevin', 'has', 'no', 'space']));