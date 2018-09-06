function fearNotLetter(str) {
  const begin = str.charCodeAt(0);
  const end = str.charCodeAt(str.length - 1);
  console.log(`begin: ${begin} \nend: ${end}`);
  for (let index = 0, i = begin; i < end; i++) {
    if (i !== str.charCodeAt(index)) {
      return String.fromCharCode(i);
    }
    index++;
  }
  return undefined;
}

fearNotLetter("abce");
