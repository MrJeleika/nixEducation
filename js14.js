let remove = function(str, n){
  for(let i = 0; i < str.length; i++){
    if(str[i] == "!") {
      str = str.split('')
      str.splice(i,1)
      str = str.join('');
      n -= 1;
    }
    if(n == 0) return str
  }
}
