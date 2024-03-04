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

// etape 1 :  crée une fct qui  prend un mot qui retourne 1 tableau avec chq caractere
function getLatinCharacterList(latintext) {
  return latintext.split("");
}
//console.log(getLatinCharacterList("paul"));
console.log(getLatinCharacterList("Hello, Word"));

// etape 2 : créer une fct qui va ecrire 1 caratere en morse qui el traduit en caratere latin // grâce à 1 dictionnaire => 1ER ECRITURE
// function translateLatinCharacter(latinCharacter) {
//   let majLatinCharacter = latinCharacter.toUpperCase();
//   return latinToMorse[majLatinCharacter];
// }
// console.log(translateLatinCharacter("A"));

// // etape 2 : créer une fct qui va ecrire 1 caratere  latin qui va le traduire en morse // grâce à 1 dictionnaire => 2EME ECRITURE
function translateLatinCharacter(latinCharacter) {
  return latinToMorse[latinCharacter.toUpperCase()];
}

console.log(translateLatinCharacter("b"));

//etape3 : créer une fct qui va ecrire UNE CHAINE DE CARACTERE en latin qui va la traduire // grâce à 1 dictionnaire => 1ER ECRITURE
function encode(latintext) {
  //declaration de cette variable sous forme de de tableau
  let result = [];
  let lettersArray = getLatinCharacterList(latintext); //1 je crée une variable - 2 j'appel la fct - 3 je range le resultat de la fct dans la variable
  console.log("lettersArray = ");
  console.log(lettersArray);
  console.log("Avant le premier push :");
  console.log(result);

  for (let i = 0; i < lettersArray.length; i++) {
    let latinCharacter = lettersArray[i];
    let transladedCharacter = translateLatinCharacter(latinCharacter);
    result.push(transladedCharacter);

    console.log("Après le push :");
    console.log(result);
  }
  return result.join(" "); // method qui permetnde prendre tout les elements du tableau et qui en fait une chaine de caractere
  //console.log(result)
}
let result = encode("Naima");
console.log("Result = ");
console.log(result);
//result = encode("Toto");
//console.log("Result = ")
//console.log(result)
