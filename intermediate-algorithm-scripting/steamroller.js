const finalArray = [];
const finalArray1 = [];
const mapMethod = array => {
  for (let arr of array) {
    if (Array.isArray(arr)) {
      finalArray.push(mapMethod(arr));
    } else {
      finalArray.push(arr);
    }
  }
};

function steamrollArray(arr) {
  // I'm a steamroller, baby
  mapMethod(arr);
  // console.log(finalArray);

  for (let item of finalArray) {
    if (item !== undefined) {
      finalArray1.push(item);
    }
  }
  return finalArray1;
}


console.log(steamrollArray([1, {}, [3, [[4]]]]));

