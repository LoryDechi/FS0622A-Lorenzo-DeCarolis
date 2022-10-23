var data = new Date();

const mesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];

var giorno = data.getDate();
var mese = mesi[data.getMonth()];
var anno = data.getFullYear();


function scrivi() {
    document.getElementById('h1').innerHTML += `${giorno}/${mese}/${anno}`;
    document.getElementById('completa').innerHTML += data;
    document.getElementById('day').innerHTML += giorno;
    document.getElementById('month').innerHTML += mese;
    dataOggi();
}

function dataOggi() {
    let mese = data.getMonth();
    document.getElementById('today').innerHTML += `${giorno}-${mese}-${anno}`;
}

// SCRIPT PER PAGINA SALUTO

function saluto() {
    var ora = data.getHours();
    if (ora > 6, ora < 14) {
        document.getElementById('saluto').innerHTML = 'Buon Giorno';
    } else if (ora > 14, ora < 20) {
        document.getElementById('saluto').innerHTML = 'Buon Pomeriggio';
    } else {
        document.getElementById('saluto').innerHTML = 'Buona Sera';
    }
}
