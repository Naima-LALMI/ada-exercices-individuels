

let surname = prompt("👋 Bonjour, " + "quel est ton nom ? ")
let msg= "👋 Bonjour " +  surname
console.log(msg)
document.body.innerHTML +=  "<h2>" +  msg + "</h2>"

let anneeNaissance = prompt("Quel est ton année de naissance ?")
let today = new Date()
let year = today.getFullYear()
let age = year - anneeNaissance
console.log(age)
document.body.innerHTML += "<h3>" + " Vous avez "+ age + " ans" + "</h3>"