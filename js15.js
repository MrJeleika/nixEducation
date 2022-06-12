let maxDiff = function(arr){
  if(arr.length <=1) return 0
  return Math.max(...arr) - Math.min(...arr)
}
