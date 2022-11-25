var User = /** @class */ (function () {
    function User(_nomeUtente, _carica, _numeroChiamate) {
        this.nomeUtente = _nomeUtente;
        this.carica = _carica;
        this.numeroChiamate = _numeroChiamate;
    }
    // ------METODI-----
    // ricarica credito, aggiunge al credito residuo il valore della ricarica
    User.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    // chiamata, sottrae dal credito il costo della chimata calcolato a 0,20 al minuto e incrementa di uno il numero chiamate
    User.prototype.chiamata = function (minutiDurata) {
        this.carica -= (minutiDurata * 0.20);
        this.numeroChiamate++;
    };
    // 'servizio clienti' che riporta il credito residuo
    User.prototype.numero404 = function () {
        return this.carica;
    };
    // 'servizio clienti' che ci riporta quante chiamate abbiamo fatto
    User.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    // azzeramento numero delle chiamate effettuate
    User.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return User;
}());
var firstUser = new User('Lorenzo', 10, 3);
var secondUser = new User('Ilaria', 20, 5);
var thirdUser = new User('Davide', 5, 2);
// firstUser.ricarica(10);
// firstUser.chiamata(10);
// firstUser.ricarica(5);
// firstUser.chiamata(2);
// firstUser.chiamata(5);
// firstUser.chiamata(3);
// console.log(firstUser.nomeUtente + ' il tuo credito residuo è: ' + firstUser.numero404());
// console.log(firstUser.nomeUtente + ' hai effettuato ' + firstUser.getNumeroChiamate() + ' chiamate');
// firstUser.azzeraChiamate();
// console.log('Chiamate azzerate, nuovo numero chiamate: ' + firstUser.getNumeroChiamate());
var home = document.getElementById('home');
var lorenzo = document.getElementById('lorenzo');
var ilaria = document.getElementById('ilaria');
var davide = document.getElementById('davide');
var btnLore = document.getElementById('lore');
var btnIla = document.getElementById('ila');
var btnDav = document.getElementById('dav');
var tornaHome = document.getElementById('tornaHome');
btnLore === null || btnLore === void 0 ? void 0 : btnLore.addEventListener('click', function () {
    lorenzo === null || lorenzo === void 0 ? void 0 : lorenzo.classList.remove('d-none');
    home.className += ' d-none';
    lorenzo.className += ' d-flex';
});
btnIla === null || btnIla === void 0 ? void 0 : btnIla.addEventListener('click', function () {
    ilaria === null || ilaria === void 0 ? void 0 : ilaria.classList.remove('d-none');
    home.className += ' d-none';
    ilaria.className += ' d-flex';
});
btnDav === null || btnDav === void 0 ? void 0 : btnDav.addEventListener('click', function () {
    davide === null || davide === void 0 ? void 0 : davide.classList.remove('d-none');
    home.className += ' d-none';
    davide.className += ' d-flex';
});
tornaHome === null || tornaHome === void 0 ? void 0 : tornaHome.addEventListener('click', function () {
    lorenzo.classList.remove('d-flex');
    lorenzo.className += ' d-none';
    ilaria.classList.remove('d-flex');
    ilaria.className += ' d-none';
    davide.classList.remove('d-flex');
    davide.className += ' d-none';
    home.classList.remove('d-none');
    home.className += ' d-flex';
});
function nuovaRicarica(name) {
    if (name == 'Lorenzo') {
        firstUser.ricarica(10);
        alert("Complimenti ".concat(firstUser.nomeUtente, "! Hai ricaricato 10\u20AC"));
    }
    else if (name == 'Ilaria') {
        secondUser.ricarica(10);
        alert("Complimenti ".concat(secondUser.nomeUtente, "! Hai ricaricato 10\u20AC"));
    }
    else {
        thirdUser.ricarica(10);
        alert("Complimenti ".concat(thirdUser.nomeUtente, "! Hai ricaricato 10\u20AC"));
    }
}
function chiama404(name) {
    if (name == 'Lorenzo') {
        alert("".concat(firstUser.nomeUtente, " il tuo credito residuo \u00E8: ").concat(firstUser.numero404(), "\u20AC"));
    }
    else if (name == 'Ilaria') {
        alert("".concat(secondUser.nomeUtente, " il tuo credito residuo \u00E8: ").concat(secondUser.numero404(), "\u20AC"));
    }
    else {
        alert("".concat(thirdUser.nomeUtente, " il tuo credito residuo \u00E8: ").concat(thirdUser.numero404(), "\u20AC"));
    }
}
function effettuaChiamata(name) {
    if (name == 'Lorenzo') {
        if (firstUser.numero404() >= 1) {
            firstUser.chiamata(5);
            alert("".concat(firstUser.nomeUtente, " hai effettuato una telefonata di 5 minuti"));
        }
        else {
            alert('non hai credito sufficiente per effettuare la chiamata, fai una ricarica!');
        }
    }
    else if (name == 'Ilaria') {
        if (secondUser.numero404() >= 1) {
            secondUser.chiamata(5);
            alert("".concat(secondUser.nomeUtente, " hai effettuato una telefonata di 5 minuti"));
        }
        else {
            alert('non hai credito sufficiente per effettuare la chiamata, fai una ricarica!');
        }
    }
    else {
        if (thirdUser.numero404() >= 1) {
            thirdUser.chiamata(5);
            alert("".concat(thirdUser.nomeUtente, " hai effettuato una telefonata di 5 minuti"));
        }
        else {
            alert('non hai credito sufficiente per effettuare la chiamata, fai una ricarica!');
        }
    }
}
function vediChiamate(name) {
    if (name == 'Lorenzo') {
        alert("".concat(firstUser.nomeUtente, " hai effettuato ").concat(firstUser.getNumeroChiamate(), " chiamate"));
    }
    else if (name == 'Ilaria') {
        alert("".concat(secondUser.nomeUtente, " hai effettuato ").concat(secondUser.getNumeroChiamate(), " chiamate"));
    }
    else {
        alert("".concat(thirdUser.nomeUtente, " hai effettuato ").concat(thirdUser.getNumeroChiamate(), " chiamate"));
    }
}
function azzera(name) {
    if (name == 'Lorenzo') {
        firstUser.azzeraChiamate();
        alert("Complimenti ".concat(firstUser.nomeUtente, "! Hai azzerato le tue chiamate"));
    }
    else if (name == 'Ilaria') {
        secondUser.azzeraChiamate();
        alert("Complimenti ".concat(secondUser.nomeUtente, "! Hai azzerato le tue chiamate"));
    }
    else {
        thirdUser.azzeraChiamate();
        alert("Complimenti ".concat(thirdUser.nomeUtente, "! Hai azzerato le tue chiamate"));
    }
}
