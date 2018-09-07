function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  /*  const keyOne = Object.keys(source)[0];
  let base = collection.filter(item => item.hasOwnProperty(Object.keys(source)))
  console.log(Object.keys(source));
  arr = collection.filter(item => item[keyOne] === source[Object.keys(source)]);

  console.log(arr);
 */

  const srcKeysArr = Object.keys(source);
  // console.log(srcKeysArr);

  arr = collection.filter(obj =>
    srcKeysArr.every(key => obj.hasOwnProperty(key) === source[key])
  );
  // Only change code above this line
  return arr;
}

whatIsInAName(
  [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
  { apple: 1, bat: 2 }
);
