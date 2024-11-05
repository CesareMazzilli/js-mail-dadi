const emails = ["pippo@gmail.com", "pluto@gmail.com", "paperino@gmail.com"];
const userEmail = prompt ("Dimmi la tua email");

let isFound = false;

for (let i = 0; i < emails.length; i++) {
    const curEmail = emails[i];
    console.log(i, userEmail, curEmail, isFound);

    if (curEmail === userEmail) {
        isFound = true;
        break;
    } 
}

console.log(isFound);


if (isFound) {
    console.log("Email trovata, puoi entrare");
} else {
    console.log("Non sei registrato");
}