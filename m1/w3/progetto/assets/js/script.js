//funzione che inserisce il valore cliccato nel display
function insertId(valore) {
    document.getElementById('display').value += valore;
}

//funzione che calcola il risultato dei valori nel dispaly
function risultato() {
    document.getElementById('display').value = eval(document.getElementById('display').value)
}

//funzione che esegue la radice
function calcoloRadice() {
    document.getElementById('display').value = Math.sqrt(document.getElementById('display').value);
}

//funzione che cancella il display
function reset() {
    document.getElementById('display').value = '';
}

//funzione che cancella l'ultimo carattere inserito
function cancella() {
    document.getElementById('display').value = document.getElementById('display').value.slice(0, -1);
}

//definizione di funzioni per il cambio di modalità
function darkMode() {
    body.classList.add('darkBody');
    scritta.classList.add('darkScritta');
    comandi.classList.add('darkComands');
    calc.classList.add('darkCalc');
    tastiera.classList.add('dark');
}

function lightMode() {
    body.classList.remove('darkBody');
    scritta.classList.remove('darkScritta');
    comandi.classList.remove('darkComands');
    calc.classList.remove('darkCalc');
    tastiera.classList.remove('dark');
}

//funzione on off
function off() {
    display.classList.add('displayOff');
}

function on() {
    document.getElementById('display').value = '';
    display.classList.remove('displayOff');
}