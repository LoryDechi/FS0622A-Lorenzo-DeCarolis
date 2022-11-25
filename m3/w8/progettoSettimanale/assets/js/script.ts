// interfaccia Smartphone
interface ISmartphone {
    // carica corrisponde al credito disponibile
    carica: number,
    // numeroChiamate corrisponde al numero di chiamate effettuate
    numeroChiamate: number

    ricarica(unaRicarica: number): void;
    chiamata(minutiDurata: number): void;
    numero404(): number;
    getNumeroChiamate(): number;
    azzeraChiamate(): void
}

class User implements ISmartphone {
    carica: number;
    numeroChiamate: number;
    // aggiunta nomeUtente per identificare il prorpietario del telefono
    nomeUtente: string;
    constructor(_nomeUtente: string, _carica: number, _numeroChiamate: number) {
        this.nomeUtente = _nomeUtente;
        this.carica = _carica;
        this.numeroChiamate = _numeroChiamate
    }

    // ------METODI-----

    // ricarica credito, aggiunge al credito residuo il valore della ricarica
    ricarica(unaRicarica: number): void {
        this.carica += unaRicarica;
    }

    // chiamata, sottrae dal credito il costo della chimata calcolato a 0,20 al minuto e incrementa di uno il numero chiamate
    chiamata(minutiDurata: number): void {
        this.carica -= (minutiDurata * 0.20);
        this.numeroChiamate++
    }

    // 'servizio clienti' che riporta il credito residuo
    numero404() {
        return this.carica;
    }

    // 'servizio clienti' che ci riporta quante chiamate abbiamo fatto
    getNumeroChiamate() {
        return this.numeroChiamate;
    }

    // azzeramento numero delle chiamate effettuate
    azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }
}


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

btnLore?.addEventListener('click', function () {
    lorenzo?.classList.remove('d-none');
    home!.className += ' d-none';
    lorenzo!.className += ' d-flex';
});

btnIla?.addEventListener('click', function () {
    ilaria?.classList.remove('d-none');
    home!.className += ' d-none';
    ilaria!.className += ' d-flex';
});

btnDav?.addEventListener('click', function () {
    davide?.classList.remove('d-none');
    home!.className += ' d-none';
    davide!.className += ' d-flex';
});

tornaHome?.addEventListener('click', function () {
    lorenzo!.classList.remove('d-flex');
    lorenzo!.className += ' d-none';

    ilaria!.classList.remove('d-flex');
    ilaria!.className += ' d-none';

    davide!.classList.remove('d-flex');
    davide!.className += ' d-none';

    home!.classList.remove('d-none');
    home!.className += ' d-flex';
});

function nuovaRicarica(name: string) {
    if (name == 'Lorenzo') {
        firstUser.ricarica(10);
        alert(`Complimenti ${firstUser.nomeUtente}! Hai ricaricato 10€`);
    } else if (name == 'Ilaria') {
        secondUser.ricarica(10);
        alert(`Complimenti ${secondUser.nomeUtente}! Hai ricaricato 10€`);
    } else {
        thirdUser.ricarica(10);
        alert(`Complimenti ${thirdUser.nomeUtente}! Hai ricaricato 10€`);
    }

}

function chiama404(name: string) {
    if (name == 'Lorenzo') {
        alert(`${firstUser.nomeUtente} il tuo credito residuo è: ${firstUser.numero404()}€`);
    } else if (name == 'Ilaria') {
        alert(`${secondUser.nomeUtente} il tuo credito residuo è: ${secondUser.numero404()}€`);
    } else {
        alert(`${thirdUser.nomeUtente} il tuo credito residuo è: ${thirdUser.numero404()}€`);
    }
}

function effettuaChiamata(name: string) {
    if (name == 'Lorenzo') {
        if (firstUser.numero404() >= 1) {
            firstUser.chiamata(5)
            alert(`${firstUser.nomeUtente} hai effettuato una telefonata di 5 minuti`);
        } else {
            alert('non hai credito sufficiente per effettuare la chiamata, fai una ricarica!')
        }
    } else if (name == 'Ilaria') {
        if (secondUser.numero404() >= 1) {
            secondUser.chiamata(5)
            alert(`${secondUser.nomeUtente} hai effettuato una telefonata di 5 minuti`);
        } else {
            alert('non hai credito sufficiente per effettuare la chiamata, fai una ricarica!')
        }
    } else {
        if (thirdUser.numero404() >= 1) {
            thirdUser.chiamata(5)
            alert(`${thirdUser.nomeUtente} hai effettuato una telefonata di 5 minuti`);
        } else {
            alert('non hai credito sufficiente per effettuare la chiamata, fai una ricarica!')
        }
    }
}

function vediChiamate(name: string) {
    if (name == 'Lorenzo') {
        alert(`${firstUser.nomeUtente} hai effettuato ${firstUser.getNumeroChiamate()} chiamate`)
    } else if (name == 'Ilaria') {
        alert(`${secondUser.nomeUtente} hai effettuato ${secondUser.getNumeroChiamate()} chiamate`)
    } else {
        alert(`${thirdUser.nomeUtente} hai effettuato ${thirdUser.getNumeroChiamate()} chiamate`)
    }
}
function azzera(name: string) {
    if (name == 'Lorenzo') {
        firstUser.azzeraChiamate();
        alert(`Complimenti ${firstUser.nomeUtente}! Hai azzerato le tue chiamate`)
    } else if (name == 'Ilaria') {
        secondUser.azzeraChiamate();
        alert(`Complimenti ${secondUser.nomeUtente}! Hai azzerato le tue chiamate`)
    } else {
        thirdUser.azzeraChiamate();
        alert(`Complimenti ${thirdUser.nomeUtente}! Hai azzerato le tue chiamate`)
    }
}