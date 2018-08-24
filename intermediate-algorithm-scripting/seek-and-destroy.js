// Section: Intermediate algortithm scripting
// algorithm: seek and destroy
function destroyer(...arr) {
  // Remove all the values
  let arrs = arr[0].concat();
  let finalArr = [];
  let deleteElements = [];
  for (let i = 1; i < arr.length; i++) {
    deleteElements.push(arr[i]);
  }
  for (let ar of arrs) {
    if (!deleteElements.includes(ar)) {
      finalArr.push(ar);
    }
  }
  arr = finalArr.concat();
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);