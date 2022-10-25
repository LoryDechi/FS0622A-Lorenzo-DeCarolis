// VARIABILI GLOBALI
var btn = document.getElementById('invia');
var inizioSpesa = document.getElementById('inizia');
var totale;
var tetto;
var minimo;


// FUNZIONE SCATENATA AL CLICK DI INSERISCI BUDGET
btn.addEventListener('click', function () {
    //raccolta valori dell'utente
    totale = document.getElementById('totale').value;
    tetto = document.getElementById('tetto').value;

    //calcolato il tetto minimo dalla percentuale inserita dall'utente
    minimo = Math.floor(totale * tetto / 100);

    //compilazione campi di testo e pulizia input
    document.getElementById('tetto').value = '';
    document.getElementById('totale').value = '';
    document.getElementById('budget').innerHTML = 'Il tuo budget è: ' + totale + ' euro';
    document.getElementById('tettoBudget').innerHTML = 'Il tuo tetto è il: ' + tetto + '%' + ', circa ' + minimo + ' euro';
});


// FUNZIONE SCATENATA AL CLICK DI INIZIA SPESA
inizioSpesa.addEventListener('click', function () {

    //reset lista acquisti
    document.getElementById('lista').innerHTML = '';

    //definzione variabili per ciclo while e conteggio acquisti 
    let i = totale;
    let count = 0;

    while (i > 200) {

        //var random = Math.floor((Math.random() * i) + 1); possibilità che ci sia un unica spesa che porti a 0 euro
        var random = Math.floor((Math.random() * (i * tetto / 100)) + 1); //questa opzione non peremtte di arrivare a 0 euro e rispetta il tetto di spesa

        //calcolo nuovo totale dopo la sotrrazione della spesa
        newTot = i - random;

        //compilazione UL per resoconto spese
        document.getElementById('lista').innerHTML += `<li><p>Spesa effettuata: ${random}</p><p>Nuovo saldo: ${newTot}</p></li>`;

        //aggiornamento nuovo totale e incremento conteggio spese
        i = newTot;
        count++;
    }

    //scrittura complessivo acquisti e alert soglia minima
    document.getElementById('numeroSpese').innerHTML = `Hai effettuato: ${count} acqusiti`;
    document.getElementById('alert').innerHTML = `Basta spese! Hai meno di 200 euro sul conto!`;
});