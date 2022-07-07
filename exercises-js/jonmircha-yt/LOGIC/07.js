const palindromo = (word = "") => {
  word = word.toLowerCase();
  let reverse = word.split("").reverse().join("");

  return word === reverse
};

console.log(palindromo("salas"));
