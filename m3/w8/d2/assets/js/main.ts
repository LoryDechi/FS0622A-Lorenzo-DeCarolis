class Mother {
    nome: string;
    conto: number;
    interesse: number;

    constructor(_nome: string, _conto: number, _interesse: number) {
        this.nome = _nome;
        this.conto = _conto;
        this.interesse = _interesse;
    }
    // VERSAMENTO
    oneDeposit(): number {
        let versamento = 20000;
        this.conto = versamento - this.addInterest(versamento);
        return this.conto;
    }
    // PRELIEVO
    oneWithDraw(): number {
        let prelievo: number = 1000;
        prelievo = prelievo + this.addInterest(prelievo);
        let saldoFinale = this.oneDeposit() - prelievo;
        return saldoFinale
    }

    addInterest(valore: number) {
        return valore = valore / 100 * this.interesse;
    }
}

var madre = new Mother('Cristina', 0, 10);

// MADRE
console.log(`Il conto di ${madre.nome} è di ${madre.oneDeposit()}€`);
console.log(`${madre.nome} ha effettutato un prelievo ora il suo conto è ${madre.oneWithDraw()}€`);


class Figlio extends Mother {
    constructor(_nome: string, _conto: number, _interesse: number) {
        super(_nome, _conto, _interesse)
    }
}
var figlio = new Figlio('Lorenzo', 0, 0);
// FIGLIO
console.log(`Il conto di ${figlio.nome} è di ${figlio.oneDeposit()}€`);
console.log(`${figlio.nome} ha effettutato un prelievo ora il suo conto è ${figlio.oneWithDraw()}€`);
