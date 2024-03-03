//Dictionnaire
const latinToMorse = {
  //Clé : Valeur
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
};

// etape 1 :  crée une fct qui Retourne 1 tableau avec chq caractere
function getLatinCharacterList(latintext) {
  return latintext.split("");
}
//console.log(getLatinCharacterList("paul"));
console.log(getLatinCharacterList("Hello, Word"));

// etape 2 : créer une fct qui va ecrire en morse grâce à 1 dictionnaire
function translateLatinCharacter(latinCharacter) {
  let majLatinCharacter = latinCharacter.toUpperCase();
  return latinToMorse[majLatinCharacter];
}
console.log(translateLatinCharacter("A"));

//etape3 : Créer une fct qui prend 1 caractere sous forme de tableau et le traduit en morse
function encode(latintext) {
  //declaration de cette variable sous forme de de tableau
  let lettersArray = getLatinCharacterList(latintext);
  let result = [];

  for (let i = 0; i < lettersArray.length; i++) {
    let latinCharacter = lettersArray[i];
    let transladedCharacter = translateLatinCharacter(latinCharacter);
    result.push(transladedCharacter);
  }
  //console.log(result)
}
let result = encode("Naima");
