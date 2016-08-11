
function repeatArr(arr) {
  if(Array.isArray(arr) === false ){
    throw new Error("Not Array!");
  }else{
    // var sorted_arr = arr.slice().sort();
    var count = {};
    results_arr = [];
    for (var i = 0; i < arr.length; i++) {
      var item = arr[i];
      count[item] = count[item] >=1 ? count[item] += 1 : 1;
      if(count[item] == 2){
        results_arr.push(item);
      }
    }
    results_arr = results_arr.sort();
    return results_arr;
  }
}
