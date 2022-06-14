let switcheroo = function(str){
  let a = 'ab';
  let b = 'ba';
  return str.replace(/[a-b]/gi, e => b[a.indexOf(e)])
}
