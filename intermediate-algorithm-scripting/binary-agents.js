function binaryAgent(str) {
  str = str.split(" ");
  //for (let item of str) {
  //parseInt(item);
  let item = parseInt(str[0]);
  let multiplier = 0;
  let finalValue = 0;
  console.log(item);
  while (item > 0) {
    multiplier = multiplier === 0 ? 1 : multiplier * 2;
    let value = item % 10;
    item /= 10;
    value *= multiplier;
    console.log(value);
    finalValue += value;
    //  console.log(value);
  }
  console.log(finalValue);
  //console.log(item);
  //}

  return str;
}

binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);
