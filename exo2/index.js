//etape 1
function askNumber() {
  // l'utilisation de parseInt est  importante pour s'assurer que le nbr saisie par l'U est traitée comme un nombre et non comme une string.
  let givenNumber = parseInt(prompt("👋 Bonjour," + " choisi un nombre"));
  return givenNumber;
}
//askNumber();
// console.log(result);

//etape 2
function didIWin(number) {
  if (number < 22) {
    alert("Plus grand");
  } else if (number > 22) {
    alert("Plus petit");
  } else {
    alert("Bravo ! Vous avez deviné le nombre");
  }
}

//didIWin();
// console.log(result);

function gamePlay() {
  let givenNumber = askNumber();
  didIWin(givenNumber);
}
gamePlay();

//Appel de la fct avec le résultat de Étape 1 directement
