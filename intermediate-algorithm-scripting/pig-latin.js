function translatePigLatin(str) {
  let regexStr = /^[a,e,i,o,u]/;
  if (regexStr.test(str)) {
    str = str.concat("way");
  } else {
    let regexStr1 = /^[^a,e,i,o,u]+/;
    let strBeginsWith = str.match(regexStr1)[0];

    str = str
      .slice(str.match(regexStr1)[0].length)
      .concat(`${strBeginsWith}ay`);
  }
  return str;
}

console.log(translatePigLatin("cbonsonant"));
