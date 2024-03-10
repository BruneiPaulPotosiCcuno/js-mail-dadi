/*Gioco dei dadi

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Mail

Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Per la soluzione di questo esercizio NON è consentito utilizzare .includes di js!
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
Buon lavoro e buon fine settimana! :faccia_leggermente_sorridente::ascoli1898:*/

//* Chiediamo il nome all'utente 
const namePlayer = prompt("Il tuo nome:");

//* Generiamo un numero ramdom per l'utente
const numberPlayer = Math.floor(Math.random() * 6) + 1;

//* Generiamo un numero ramdom per il computer 
const numberComputer = Math.floor(Math.random() * 6) + 1;

//*Stabiliamo il vincitore in base al numero piu alto
if (numberPlayer > numberComputer) {
    winner = "Giocatore";
} else if(numberPlayer < numberComputer) {
    winner = "Computer";
} else {
    winner = "Pareggio";
}

//Risultato in un messagio
const message = `Ciao ${namePlayer}, hai ottenuto ${numberPlayer}. 
Il computer ha ottenuto ${numberComputer}. Il vincitore è: ${winner}`;

//Dobbiamo creare lallerta per il vincitore
alert(message)


