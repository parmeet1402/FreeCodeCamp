function dropElements(arr, func) {
  // Drop them elements.
  let i = 0;
  for (; i < arr.length; i++) {
    if (func(arr[i])) {
      break;
    }
  }
  arr = arr.slice(i);
  return arr;
}

dropElements([1, 2, 3], function(n) {
  return n < 3;
});
