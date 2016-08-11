
function getDuplicate(arr) {
  if(Array.isArray(arr) === false ){
    throw new Error("Not Array!");
  }else{
    // var sorted_arr = arr.slice().sort();
    var count = {};
    results_arr = [];
    for (var i = 0; i < arr.length; i++) {
      var item = arr[i];
      if(!Number.isInteger(item)){
        throw new Error("Not all integers");
      }
      //makes every item in the array a property of count object. if value of that property is >= 1, then add one to that value of that property, else set it to be 1
      count[item] = count[item] >=1 ? count[item] += 1 : 1;

      // if the value of the property is 2, then push it to the results_arr, if it's more than 2, ignore, cos already pushed. If less than 2 also ignore, cos no duplicate. 
      if(count[item] == 2){
        results_arr.push(item);
      }
    }
    results_arr = results_arr.sort();
    console.log(count);
    return results_arr;
  }
}

getDuplicate([2,4,2,3,5,3,5,6,3,2,1,3,1])
