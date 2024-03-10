/*Mail

Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Per la soluzione di questo esercizio NON è consentito utilizzare .includes di js!*/

// Chiediamo all'utente la sua email
// all'utente e vediamo se
// l'email puo accedere
// se e disponibile
// o non e disponibile

// Chiediamo all'utente la sua email

const userEmail = prompt('Inserisce il tuo email');

const emails = ['jfriedl@example.com', 'utente@example.com', 'jadavis@example.com', 'dmath@example.com', 'tokuhirom@example.com'];


let emailFound = false;
// Scorrere l'elenco delle email
for(let i = 0; i < emails.length; i++) {
    const thisEmail = emails[i];

    // Per ogni email:
    // Controllo se l'email nel ciclo è uguale a quella dell'utente
    // Se trovo l'email nella lista -> mi appunto che l'ho trovata (nella viariabile)
    if(thisEmail === userEmail) {
        emailFound = true;
    }
}

// Alla fine del ciclo se nella variabile vedo che l'email c'è stampo!
// altrimenti stampo non e disponibile
if(emailFound === true) {
    alert('Il tuo email e disponibile');
} else {
    alert('Il tuo email non e disponibile');
}
