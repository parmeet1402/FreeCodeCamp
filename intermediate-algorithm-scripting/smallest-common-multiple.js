function smallestCommons(arr) {
  let biggerNumber;
  let smallerNumber;

  //find which no. is bigger of the two passed
  if (arr[0] > arr[1]) {
    biggerNumber = arr[0];
    smallerNumber = arr[1];
  } else {
    biggerNumber = arr[1];
    smallerNumber = arr[0];
  }
  //populate the base array
  let baseArray = [];
  for (let i = smallerNumber; i <= biggerNumber; i++) {
    baseArray.push(i);
  }
  console.log(baseArray);

  // declare max, min and isSmallestCommons variable
  let max = biggerNumber;
  let min = smallerNumber;
  let isSmallestCommons = false;

  //counter variable j is declared
  let j = 1;

  //create answer array
  let answer = baseArray.concat();
  while (!isSmallestCommons && j <= 2000) {
    max = biggerNumber * j;
    let flag = 0;
    for (let index = 0; index < baseArray.length; index++) {
      let baseValue = baseArray[index];
      for (let i = 1; baseValue * i <= max; i++) {
        answer[index] = baseValue * i;
      }
    }
    for (let item of answer) {
      if (item !== max) {
        flag = 1;
      }
    }
    j++;
    isSmallestCommons = flag === 1 ? false : true;
  }

  return answer[0];
}

smallestCommons([1, 13]);
