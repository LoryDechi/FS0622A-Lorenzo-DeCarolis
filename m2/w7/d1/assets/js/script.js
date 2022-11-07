var arrayLista = '';
var btn = document.getElementById('invia');
var table = document.getElementById('table');

class User {
    constructor(_nome, _cognome, _anno) {
        this.nome = _nome;
        this.cognome = _cognome;
        this.anno = new Date(_anno);
    }
    eta() {
        return new Date().getFullYear() - this.anno.getFullYear();
    }
    aggiungiRiga() {
        arrayLista = `<tr><td>${this.nome} ${this.cognome}</td><td>${this.eta()}</td></tr>`;
        table.innerHTML += arrayLista;
    }
}

btn.addEventListener('click', function (e) {
    e.preventDefault();

    let nome = document.getElementById('name').value;
    let cognome = document.getElementById('surname').value;
    let eta = document.getElementById('date').value;

    let newUser = new User(nome, cognome, eta);
    newUser.aggiungiRiga();

    document.getElementById('name').value = '';
    document.getElementById('surname').value = '';
    document.getElementById('date').value = '';
});