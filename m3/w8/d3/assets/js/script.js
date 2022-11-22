var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Lavoratori = /** @class */ (function () {
    function Lavoratori(_codredd, _redditoAnnualeLordo, _tasseInps, _tasseIrpef) {
        this.codredd = _codredd;
        this.redditoAnnualeLordo = _redditoAnnualeLordo;
        this.tasseInps = _tasseInps;
        this.tasseIrpef = _tasseIrpef;
    }
    return Lavoratori;
}());
var Utente = /** @class */ (function (_super) {
    __extends(Utente, _super);
    function Utente(_codredd, _redditoAnnualeLordo, _tasseInps, _tasseIrpef) {
        return _super.call(this, _codredd, _redditoAnnualeLordo, _tasseInps, _tasseIrpef) || this;
    }
    Utente.prototype.getUtileTasse = function () {
        return this.redditoAnnualeLordo * this.codredd / 100;
    };
    Utente.prototype.getTasseInps = function () {
        return this.getUtileTasse() * this.tasseInps / 100;
    };
    Utente.prototype.getTasseIrpef = function () {
        return this.getUtileTasse() * this.tasseIrpef / 100;
    };
    Utente.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoAnnualeLordo - (this.getTasseInps() + this.getTasseIrpef());
    };
    return Utente;
}(Lavoratori));
var professionista = new Utente(78, 40000, 23, 35);
var artigiano = new Utente(67, 20000, 23, 25);
var commerciante = new Utente(40, 30000, 23, 35);
console.log('Utile tasse professionista: ' + professionista.getUtileTasse());
console.log('Tasse inps professionista: ' + professionista.getTasseInps());
console.log('Tasse Irpef professionista: ' + professionista.getTasseIrpef());
console.log('Reddito annuo netto professionista: ' + professionista.getRedditoAnnuoNetto());
console.log('----------------------------------------------------');
console.log('Utile tasse artigiano: ' + artigiano.getUtileTasse());
console.log('Tasse inps artigiano: ' + artigiano.getTasseInps());
console.log('Tasse Irpef artigiano: ' + artigiano.getTasseIrpef());
console.log('Reddito annuo netto artigiano: ' + artigiano.getRedditoAnnuoNetto());
console.log('----------------------------------------------------');
console.log('Utile tasse commerciante: ' + commerciante.getUtileTasse());
console.log('Tasse inps commerciante: ' + commerciante.getTasseInps());
console.log('Tasse Irpef commerciante: ' + commerciante.getTasseIrpef());
console.log('Reddito annuo netto commerciante: ' + commerciante.getRedditoAnnuoNetto());
