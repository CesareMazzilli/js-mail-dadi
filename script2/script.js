const computerNumber = Math.floor(Math.random() * 6) +1;

const userNumber = Math.floor(Math.random() *6) + 1;

console.log(computerNumber, userNumber);

let message = "";
if (computerNumber > userNumber) {
    message = "Ha vinto il computer";
} else if ( computerNumber < userNumber){
    message = "Ha vinto l'utente";
} else {
    message = "Pareggio"
}

console.log(message);