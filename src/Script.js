function pushPop(initialArr, pushArr, num_to_pop) {
  if (Array.isArray(initialArr) && Array.isArray(pushArr)) {
    if (pushArr.length !== 0) {
      for (i = 0; i <= pushArr.length; i++) {
        initialArr.push(pushArr.shift());
      }
    }
    if (Number.isInteger(num_to_pop) && num_to_pop > 0) {
      for (i = 1; i <= num_to_pop; i++) {
        console.log(initialArr);
        initialArr.pop();
      }
    }
  }else if(!Array.isArray(initialArr)){
    initialArr = [];
    if (pushArr.length !== 0) {
      for (i = 0; i <= pushArr.length; i++) {
        initialArr.push(pushArr.shift());
      }
    }
    if (Number.isInteger(num_to_pop) && num_to_pop > 0) {
      for (i = 1; i <= num_to_pop; i++) {
        console.log(initialArr);
        initialArr.pop();
      }
    }
  }
  return initialArr;
}



console.log(pushPop([1, 2], [], 1));

// initialArr can be empty
// pushArr can be empty
// pop from top of pushArr to push into initialArr
// num_to_pop MUST be integer
