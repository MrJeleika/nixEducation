let wordLength = function(str, n){
  return str.split(/[^а-я]/gi).filter(s => s.length > n)
}
