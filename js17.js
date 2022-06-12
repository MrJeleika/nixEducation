let divisibleByThree = function(num){
  return +num.split('').reduce((i,c) => i * c) % 3 == 0
}
