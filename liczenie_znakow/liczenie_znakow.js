function countChar(string, ch) {
  var counted = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;
    }
  }
  return counted;
}

function countBR(string){
	return countChar(string, "K");
}

console.log(countChar("AAAAC", "A"));
console.log(countBR("KKKK"));