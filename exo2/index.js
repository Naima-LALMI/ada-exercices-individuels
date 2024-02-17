//etape 1
function demandeUnNombre (){
   // l'utilisation de parseInt est  importante pour s'assurer que le nbr saisie par l'U est traitée comme un nombre et non comme une string.
     let givenNumber = parseInt(prompt ("👋 Bonjour," + " choisi un nombre")) 
    return givenNumber
   // let msg = "👋 Bonjour, "+ "tu as choisi " + varGiveNumber
    //document.body.innerHTML += "<h2>" + msg  + "</h2>"
}


//etape 2
function didIWin (givenNumber){
   if (givenNumber < 22) {
      alert("Plus grand");
  } else if (givenNumber > 22) {
      alert("Plus petit");
  } else {
      alert("Bravo ! Vous avez deviné le nombre");
  }
}

//Appel de la fct avec le résultat de Étape 1 directement
didIWin(demandeUnNombre()) 

