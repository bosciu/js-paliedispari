/*2 - Pari e Dispari
L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

function isOdd(x) {

    if (x % 2 == 0) {
        return "pari"
    } else {
        return "dispari"
    }
}

function randomNumber(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var oddOrEven = (prompt("Scegli pari o dispari!").toLowerCase());

/* Creo un ciclo per verificare che l'utente scelga correttamente */
while (oddOrEven != "pari" && oddOrEven != "dispari") {
    oddOrEven = (prompt("Errore! Scegli pari o dispari!").toLowerCase());
}
console.log(oddOrEven);

/* Chiedo all'utente un numero da 1 a 5 */
var userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
while (userNumber > 5 || userNumber < 1) {
    userNumber = parseInt((prompt("Errore! Inserisci un numero da 1 a 5")));
}

var pcNumber = randomNumber(1, 5);

var somma = userNumber + pcNumber;
risultato = isOdd(somma);

if (oddOrEven == risultato) {
    console.log("Hai vinto");
} else {
    console.log("Hai perso");
}