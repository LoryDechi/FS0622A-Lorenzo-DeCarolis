const stringa = "Sto imparando JavaScript";

//maisucolo
var maiuscolo = stringa.toUpperCase();
document.getElementById('maiuscola').innerHTML = maiuscolo;

//minuscolo
var minuscolo = stringa.toLowerCase();
document.getElementById('minuscola').innerHTML = minuscolo;

//split
var spelling = stringa.split("");
document.getElementById('strArray').innerHTML = spelling;

//estrai Caratteri
var pos1 = stringa.substring(3, 2);
var pos2 = stringa.substring(2, 1);
var pos3 = stringa.substring(15, 14);
var pos4 = stringa.substring(19, 18);
var estraiCaratteri = pos1 + pos2 + pos3 + pos4;
document.getElementById('estraiCaratteri').innerHTML = estraiCaratteri;

//concatena
var concatena = stringa.concat(' ' + pos3 + pos4);
document.getElementById('concatena').innerHTML = concatena;

//estrai stringa
var estraiStringa = stringa.slice(5, 9);
document.getElementById('estraiStringa').innerHTML = estraiStringa;


// esercizo 2 array
var arrayNomi = ['Giovanni', 'Carla', 'Piero', 'Mirtilla'];

document.getElementById('array').innerHTML = arrayNomi;

//lunghezza array
var lunghezza = arrayNomi.length;
document.getElementById('lunghezza').innerHTML = lunghezza;

//singolo elemento
document.getElementById('elemento').innerHTML = arrayNomi[2];

//ultimo
document.getElementById('ultimo').innerHTML = arrayNomi[3];

//modificato
var cambioNome = arrayNomi.splice(2, 1, 'Massimo');
document.getElementById('modificato').innerHTML = arrayNomi;

//esercizio 3 array argomento di funzione
var arrayNascita = [2001, 1990, 1987, 2018, 2010];

const calcolaAnni = function (compleanno) {
    return 2022 - compleanno;
}

const eta0 = calcolaAnni(arrayNascita[0]);
const eta1 = calcolaAnni(arrayNascita[1]);
const eta2 = calcolaAnni(arrayNascita[2]);
const eta3 = calcolaAnni(arrayNascita[3]);
const eta4 = calcolaAnni(arrayNascita[4]);

var arrayEta = [eta0, eta1, eta2, eta3, eta4];


document.getElementById('eta1').innerHTML += eta0 + ' anni';
document.getElementById('eta2').innerHTML += eta1 + ' anni';
document.getElementById('eta3').innerHTML += eta2 + ' anni';
document.getElementById('eta4').innerHTML += eta3 + ' anni';
document.getElementById('eta5').innerHTML += eta4 + ' anni';
document.getElementById('arrayEta').innerHTML += arrayEta;


// esercizio 4 aniamli
var arrayAnimali = ['coniglio', 'cane', 'gatto', 'criceto'];

document.getElementById('intero').innerHTML = arrayAnimali;

//push animale ultimo posto
var aggiunta = arrayAnimali.push('leone');

document.getElementById('aggiunto').innerHTML = arrayAnimali;

//pop animale ultimo posto
var rimosso = arrayAnimali.pop();

document.getElementById('estratto').innerHTML = arrayAnimali;

//prima verifica elemento
var controllo = arrayAnimali.includes('criceto');

document.getElementById('verifica1').innerHTML = controllo;

//seconda verifica elemento
var controllo2 = arrayAnimali.includes('leone');

document.getElementById('verifica2').innerHTML = controllo2;