function uniteUnique(...arr) {
  let baseArr = arr;
  let newArr = [];
  for (let ar of baseArr) {
    for (let a of ar) {
      if (!newArr.includes(a)) {
        newArr.push(a);
      }
    }
  }
  return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
