function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  str = str.split(" ").join("-").toLowerCase();
  return str;
}
console.log(spinalCase("This Is Spinal Tap"));
