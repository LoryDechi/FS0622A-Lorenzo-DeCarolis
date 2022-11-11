var nome;
var cognome;
var addBtn;
var elencoHTML;
var errore;
var erroreElenco;
var elenco = [];
var active;
window.addEventListener('DOMContentLoaded', init);

function init() {
	active = true || false;
	nome = document.getElementById('nome');
	cognome = document.getElementById('cognome');
	addBtn = document.getElementById('scrivi');
	elencoHTML = document.getElementById('elenco');
	errore = document.getElementById('errore');
	erroreElenco = document.getElementById('erroreElenco');
	printData();
	eventHandler();
}

function eventHandler() {
	// aggiunto ciclo if su var active per controllare se è una nuova aggiunta o una modifica
	addBtn.addEventListener('click', function () {
		if (active == true) {
			controlla();
		}
	});
}

function printData() {
	fetch('http://localhost:3000/elenco')
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			elenco = data;
			if (elenco.length > 0) {
				errore.innerHTML = '';
				elencoHTML.innerHTML = '';
				elenco.map(function (element) {
					elencoHTML.innerHTML += `<li class="my-2"><button type="button" class="btn btn-outline-danger me-1" onClick="elimina(${element.id})">X</button> <button type="button" class="btn btn-outline-warning me-1" onClick="modifica(${element.id},'${element.nome}','${element.cognome}')">&#9998;</button> ${element.nome} ${element.cognome}</li>`;
				});
			} else {
				erroreElenco.innerHTML = 'Nessun elemento presente in elenco';
			}
		});
}

function controlla() {
	if (nome.value != '' && cognome.value != '') {
		var data = {
			nome: nome.value,
			cognome: cognome.value,
		};
		addData(data);
	} else {
		errore.innerHTML = 'Compilare correttamente i campi!';
		return;
	}
}

async function addData(data) {
	let response = await fetch('http://localhost:3000/elenco', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify(data),
	});
	clearForm();
}

function clearForm() {
	nome.value = '';
	cognome.value = '';
}

// funzione che elimina le voci alla conferma dell'alert
function elimina(id) {
	let alert = `Sei sicuro? l'operazione è irreversibile!`;
	if (confirm(alert) == true) {
		fetch('http://localhost:3000/elenco/' + id, {
			method: 'DELETE',
		});
	}

}

// funzione modifica --> inserimento valori del campo input, assegnazione valore alla var active per controllo su addBtn, modifica effettiva dei dati
function modifica(id, name, surname) {
	nome.value = name;
	cognome.value = surname;

	active = false;
	addBtn.addEventListener('click', function () {
		var data = {
			nome: nome.value,
			cognome: cognome.value,
		};
		fetch('http://localhost:3000/elenco/' + id, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			},
			body: JSON.stringify(data),
		});
	});
}
