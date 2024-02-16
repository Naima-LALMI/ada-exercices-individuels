function givenNumber (){
    let varGiveNumber = prompt ("👋 Bonjour," + " choisi un nombre") 
    return varGiveNumber
   // let msg = "👋 Bonjour, "+ "tu as choisi " + varGiveNumber
    //document.body.innerHTML += "<h2>" + msg  + "</h2>"
}
givenNumber()

function didIWin (givenNumber){
if (givenNumber< 22) {
   alert ("Allez continue, le nomre est plus grand")
} else if (givenNumber>22) {
    alert ("Ohhhhh, le nomre est plus petit.Tu vas trouver")  
} else if(givenNumber=22) {
    alert ("Bravo! tu as deviné le nombre")   
}
return alert
}

didIWin()