var array = [];
var Articolo = /** @class */ (function () {
    function Articolo(_id, _codprod, _collezione, _capo, _modello, _quantita, _colore, _prezzoivaesclusa, _prezzoivainclusa, _disponibile, _saldo) {
        this.id = _id;
        this.codprod = _codprod;
        this.collezione = _collezione;
        this.capo = _capo;
        this.modello = _modello;
        this.quantita = _quantita;
        this.colore = _colore;
        this.prezzoivaesclusa = _prezzoivaesclusa;
        this.prezzoivainclusa = _prezzoivainclusa;
        this.disponibile = _disponibile;
        this.saldo = _saldo;
    }
    Articolo.prototype.getSaldo = function () {
        return this.prezzoivainclusa * this.saldo / 100;
    };
    Articolo.prototype.getAcquisto = function () {
        return this.prezzoivainclusa - this.getSaldo();
    };
    return Articolo;
}());
window.addEventListener('DOMContentLoaded', init);
function init() {
    fetch('http://localhost:3000/articoli')
        .then(function (response) {
        return response.json();
    })
        .then(function (data) {
        array = data;
        console.log(array);
        array.map(function (element) {
            var capoAbbigliamento = new Articolo(element.id, element.codprod, element.collezione, element.capo, element.modello, element.quantita, element.colore, element.prezzoivaesclusa, element.prezzoivainclusa, element.disponibile, element.saldo);
            console.log(capoAbbigliamento);
            console.log('Prezzo finale prodotto: ' + capoAbbigliamento.getAcquisto());
        });
    });
}
