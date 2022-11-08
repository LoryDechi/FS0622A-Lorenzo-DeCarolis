class User {
    constructor(_items, _pageSize) {
        this.items = _items;
        this.pageSize = _pageSize;
    }


}

let table = document.getElementById('table');

// creazione array utenti
const users = [
    { id: 1, nome: 'Luigi', cognome: 'Verdi', classe: 'A' },
    { id: 2, nome: 'Mario', cognome: 'Bianchi', classe: 'A' },
    { id: 3, nome: 'Piero', cognome: 'Neri', classe: 'A' },
    { id: 4, nome: 'Paolo', cognome: 'Rossi', classe: 'A' },
    { id: 5, nome: 'Sergio', cognome: 'Verdi', classe: 'A' },
    { id: 6, nome: 'Luca', cognome: 'Rossi', classe: 'A' },
    { id: 7, nome: 'Gianni', cognome: 'Bianchi', classe: 'A' },
    { id: 8, nome: 'Davide', cognome: 'Neri', classe: 'A' }
];


// creazione tabella
users.forEach((user) => {
    table.innerHTML += `<tr><td>${user.id}</td><td>${user.nome}</td><td>${user.cognome}</td><td>${user.classe}</td></tr>`
});
