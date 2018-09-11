function isPrime(num) {
  for (let divideNumber = 2; divideNumber < num; divideNumber++) {
    if (num % divideNumber === 0) {
      return false;
    }
  }
  return true;
}

function sumPrimes(num) {
  let sum = 0;
  for (let index = 2; index <= num; index++) {
    if (isPrime(index)) {
      sum += index;
    }
  }
  return sum;
}

sumPrimes(10);
