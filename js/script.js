/* 1 - Palindroma
Chiedere all'utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/
var root = document.getElementById("root");
var root2 = document.getElementById("root-2");

function primoEsercizio() {
    function isPalindroma(parola) {
        /* Porto i caratteri della parola tutti minuscoli */
        parola = parola.toLowerCase();
        /* Scompongo la parola e inserisco in un array */
        var parolaScomposta = parola.split("");
        /* Prendo l'array e lo inverto, e lo faccio ritornare stringa */
        var parolaAlContrario = parolaScomposta.reverse().join("");
        /* Verifico se la parola è palindroma o meno */
        if (parola == parolaAlContrario) {
            return "è palindroma.";
        } else {
            return "non è palindroma.";
        }
    }
    var parolaUtente = prompt("Inserisci una parola");
    root.innerHTML = "La parola " + parolaUtente + " " + isPalindroma(parolaUtente);
}


/*2 - Pari e Dispari
L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

function secondoEsercizio() {
    /* Functions */
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


    /* Chiedo pari o dispari all'user */
    var oddOrEven = (prompt("Scegli pari o dispari!").toLowerCase());

    /* Creo un ciclo per verificare che l'utente scelga correttamente */
    while (oddOrEven != "pari" && oddOrEven != "dispari") {
        oddOrEven = (prompt("Errore! Scegli pari o dispari!").toLowerCase());
    }

    /* Chiedo all'utente un numero da 1 a 5 */
    var userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
    while (userNumber > 5 || userNumber < 1) {
        userNumber = parseInt((prompt("Errore! Inserisci un numero da 1 a 5")));
    }

    /* Genero un numero casuale al pc da 1 a 5 inclusi */
    var pcNumber = randomNumber(1, 5);

    var somma = userNumber + pcNumber;
    var risultato = isOdd(somma);


    var messaggio = "Hai scelto " + oddOrEven + " ed il numero " + userNumber + ", mentre il computer ha scelto il numero " + pcNumber + ". La somma dei numeri è " + somma + ", che è " + risultato;

    if (oddOrEven == risultato) {
        root2.innerHTML = messaggio + ". Hai vinto!";
    } else {
        root2.innerHTML = messaggio + ". Hai perso.";
    }
}