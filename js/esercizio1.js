/* 1 - Palindroma
Chiedere all'utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/


function isPalindroma(parola) {
    /* Porto i caratteri della parola tutti minuscoli */
    parola = parola.toLowerCase();
    /* Scompongo la parola e inserisco in un array */
    var parolaScomposta = parola.split("");
    /* Prendo l'array e lo inverto, e lo faccio ritornare stringa */
    var parolaAlContrario = parolaScomposta.reverse().join("");
    /* Verifico se la parola è palindroma o meno */
    if (parola == parolaAlContrario) {
        return "E' palindroma";
    } else {
        return "Non è palindroma";
    }
}

var parolaUtente = prompt("Inserisci una parola");
console.log(isPalindroma(parolaUtente));