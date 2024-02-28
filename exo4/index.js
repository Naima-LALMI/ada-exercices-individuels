// etape 1

function getLatinCharacterList(texte) {
  return texte.split("");
}

console.log(getLatinCharacterList("Hello Word"));

//etape 2

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

function translateLatinCharacter(lettre) {
  return latinToMorse[lettre];
}

console.log(translateLatinCharacter("A"));
