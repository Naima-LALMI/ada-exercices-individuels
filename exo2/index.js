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
    return false;
  } else if (number > 22) {
    alert("Plus petit");
    return false;
  } else {
    alert("Bravo ! Vous avez deviné le nombre");
    return true;
  }
}

//didIWin();
// console.log(result);

//etape 3
function gamePlay() {
  let result = false;
  if (result == false) {
    let givenNumber = askNumber();
    result = didIWin(givenNumber);
  }
}
gamePlay();

// CORRECTION PAR KRIS

// function askNumber() {
//   let givenNumber;
//   givenNumber = parseInt(prompt("Give me a number"));

//   return givenNumber;
// }

// function askNumberToGuess() {
//   let numberToGuess = -1;
//   while (numberToGuess < 0 || numberToGuess > 50) {
//     numberToGuess = parseInt(
//       prompt("Give me a number to guess between 0 and 50")
//     );
//   }

//   return numberToGuess;
// }

// function didIWin(number, numberToGuess) {
//   if (number < numberToGuess) {
//     alert("Plus grand");
//     return false;
//   } else if (number > numberToGuess) {
//     alert("Plus petit");
//     return false;
//   } else {
//     alert("Bravo ! Vous avez deviné le nombre");
//     return true;
//   }
// }

// function gamePlay() {
//   let numberToGuess = askNumberToGuess();

//   let result = false;
//   while (result == false) {
//     let givenNumber = askNumber();
//     result = didIWin(givenNumber, numberToGuess);
//   }
// }

// gamePlay();
