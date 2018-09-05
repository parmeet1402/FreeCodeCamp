function myReplace(str, before, after) {
  let startIndex = str.indexOf(before);
  if (before.charAt(0) === before.charAt(0).toUpperCase()) {
    after = after.replace(after.charAt(0), after.charAt(0).toUpperCase());
  }
  let endIndex = before.length - 1 + startIndex;
  let str1 = str
    .slice(0, startIndex)
    .concat(after)
    .concat(str.slice(endIndex + 1));
  return str1;
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
