let multiplyDifference = function(arr1, arr2){
  return Math.abs(arr1.reduce((i,c)=> i*c) - arr2.reduce((i,c)=> i*c))
}