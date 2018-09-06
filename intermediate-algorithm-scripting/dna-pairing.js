function pairElement(str) {
  str = str.split("");
  let arr = [];
  for (let item of str) {
    switch (item) {
      case "G":
        arr.push(["G", "C"]);
        break;
      case "C":
        arr.push(["C", "G"]);
        break;
      case "A":
        arr.push(["A", "T"]);
        break;
      case "T":
        arr.push(["T", "A"]);
        break;
    }
  }
  return arr;
}

pairElement("ATCGA");
