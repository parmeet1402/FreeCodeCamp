function sumFibs(num) {
  let sum = 0;
  let firstNumber = 1;
  let secondNumber = 1;
  sum = firstNumber + secondNumber;
  let thirdNumber = firstNumber + secondNumber;
  while (num >= thirdNumber) {
    if (!(thirdNumber % 2 === 0)) {
      sum += thirdNumber;
    }
    firstNumber = secondNumber;
    secondNumber = thirdNumber;
    thirdNumber = firstNumber + secondNumber;
  }
  return sum;
}

sumFibs(10);
