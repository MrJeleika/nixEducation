let deleteUnwantedNames = function (arr) {
  const unwantedNames = ['Дима', 'Саша', 'Ольга','Никита'];
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < unwantedNames.length;j++){
      if(arr[i] == unwantedNames[j]) arr.splice(i,1)
    }
  }
  return arr
}