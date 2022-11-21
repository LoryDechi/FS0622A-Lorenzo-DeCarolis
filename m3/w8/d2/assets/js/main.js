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
var Mother = /** @class */ (function () {
    function Mother(_nome, _conto, _interesse) {
        this.nome = _nome;
        this.conto = _conto;
        this.interesse = _interesse;
    }
    // VERSAMENTO
    Mother.prototype.oneDeposit = function () {
        var versamento = 20000;
        this.conto = versamento - this.addInterest(versamento);
        return this.conto;
    };
    // PRELIEVO
    Mother.prototype.oneWithDraw = function () {
        var prelievo = 1000;
        prelievo = prelievo + this.addInterest(prelievo);
        var saldoFinale = this.oneDeposit() - prelievo;
        return saldoFinale;
    };
    Mother.prototype.addInterest = function (valore) {
        return valore = valore / 100 * this.interesse;
    };
    return Mother;
}());
var madre = new Mother('Cristina', 0, 10);
// MADRE
console.log("Il conto di ".concat(madre.nome, " \u00E8 di ").concat(madre.oneDeposit(), "\u20AC"));
console.log("".concat(madre.nome, " ha effettutato un prelievo ora il suo conto \u00E8 ").concat(madre.oneWithDraw(), "\u20AC"));
var Figlio = /** @class */ (function (_super) {
    __extends(Figlio, _super);
    function Figlio(_nome, _conto, _interesse) {
        return _super.call(this, _nome, _conto, _interesse) || this;
    }
    return Figlio;
}(Mother));
var figlio = new Figlio('Lorenzo', 0, 0);
// FIGLIO
console.log("Il conto di ".concat(figlio.nome, " \u00E8 di ").concat(figlio.oneDeposit(), "\u20AC"));
console.log("".concat(figlio.nome, " ha effettutato un prelievo ora il suo conto \u00E8 ").concat(figlio.oneWithDraw(), "\u20AC"));
