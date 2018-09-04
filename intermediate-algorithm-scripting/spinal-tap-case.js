function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  let strRegex = /([a-z])([A-Z])/g;
  str = str.replace(strRegex, "$1 $2");
  str = str.replace(/\s|_/g, "-").toLowerCase();

  return str;
}
console.log(spinalCase("This Is Spinal Tap"));
