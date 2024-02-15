function askName (){
    //Fenetre pour demander le nom
    let surname = prompt("👋 Bonjour, " + "quel est ton nom ? ")
    //Message 'msg' concaténer à afficher 
    let msg= "👋 Bonjour " +  surname
    //console.log(msg)
    //Affichage du message 'msg' dans html
    document.body.innerHTML +=  "<h2>" +  msg + "</h2>"                                
}

function askBirthYear(){
    let anneeNaissance = prompt("Quel est ton année de naissance ?")
    let moisNaissance = prompt ("Quel est ton mois (en chiffre) de naissance ?")
    let today = new Date() //2024
    let month = today.getMonth()+1
    let year = today.getFullYear()
    let age = year - anneeNaissance 
    let mois = month - moisNaissance
    if (moisNaissance<=month){
        age--
    }else {
        age++
    }
  console.log(today)
    document.body.innerHTML += "<h3>" + " Vous avez " + age  + "ans" + mois + "mois" + "</h3>"
}

//Appel la fonction askName
askName ()
//Appel la fonction askBirtYear
askBirthYear ()




