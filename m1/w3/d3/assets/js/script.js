//Primo caso corretta
function succo(mele, arance) {
    var spesa = `Succo con ${mele} mele e ${arance} arance`;
    return spesa
}

document.getElementById('corretta').innerHTML = succo(4, 5);

//secondo caso sbagliata

document.getElementById('sbagliata').innerHTML = succo(6);

//calcolare la propria età

function calcoloEta(annoNascita) {
    var eta = 2022 - annoNascita;
    return eta
}

document.getElementById('eta').innerHTML += `${calcoloEta(1998)} anni`;

//funzione freccia calcolo anno nascita

calcoloAnno = (eta1) => {
    var anna = 2022 - eta1;
    return anna
}

document.getElementById('persona1').innerHTML = `L'anno di nascita di Anna è il ${calcoloAnno(30)}`;

calcoloAnno = (eta2) => {
    var maria = 2022 - eta2;
    return maria
}

document.getElementById('persona2').innerHTML = `L'anno di nascita di Maria è il ${calcoloAnno(24)}`;

//torta con funzione come oggetto di una funzione
torta(9, 15)
function torta(fetteMela, fetteArancia) {
    function ricetta() {
        document.getElementById('torta').innerHTML = `Torta con ${fetteMela} fette di mele e ${fetteArancia} fette di arancia.`;
    }
    ricetta();
}

//form calcolo spesa
var cibo;
var detersivi;
var abiti;
btn = document.getElementById('calcola');

btn.addEventListener('click', function () {
    cibo = Number(document.getElementById('cibo').value);
    detersivi = Number(document.getElementById('detersivi').value);
    abiti = Number(document.getElementById('abiti').value);
    totaleSpesa();
});

function totaleSpesa() {
    let somma = cibo + detersivi + abiti;
    document.getElementById('totale').innerHTML = `Il totale spesa è: &euro; ${somma}`;
    cancellaForm();
}

function cancellaForm() {
    document.getElementById('cibo').value = '';
    document.getElementById('detersivi').value = '';
    document.getElementById('abiti').value = '';
}
