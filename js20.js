let typeSort = function(arr){
  return {
    number: arr.filter(e => typeof e === "number"),
    string: arr.filter(e => typeof e === 'string'),
    boolean: arr.filter(e => typeof e == 'boolean'),
  }
}
console.log(typeSort(['a', 1, 2, false, 'b']));