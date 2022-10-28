var menuButton = document.getElementById('menu');
var tendina = document.getElementById('content');
tendina.style.maxHeight = '0px';

menuButton.addEventListener('click', function () {
    if (tendina.style.maxHeight == '0px') {
        tendina.style.maxHeight = '150px';
    } else {
        tendina.style.maxHeight = '0px'
    }
});

// funzionalità button
var buttons = document.querySelectorAll('.rules');
var titolo = document.getElementById('titolo');

// ingrandisce h1
buttons[0].addEventListener('click', function () {
    titolo.style.fontSize = '100px';
});
// cambia colore
buttons[1].addEventListener('click', function () {
    titolo.style.color = 'red';
});
// maiuscolo
buttons[2].addEventListener('click', function () {
    titolo.style.textTransform = 'uppercase';
});
// nascondi
buttons[3].addEventListener('click', function () {
    titolo.style.visibility = 'hidden';
});
// mostrare
buttons[4].addEventListener('click', function () {
    titolo.style.visibility = 'visible';
});

// Lista toDo
var lista = document.querySelectorAll('li');

for (i = 0; i < lista.length; i++) {

    lista[i].addEventListener('mouseover', function () {
        this.className += ' evidenziato';
    });

    lista[i].addEventListener('mouseout', function () {
        this.classList.remove('evidenziato');
    });

    lista[i].addEventListener('click', function () {
        this.classList.toggle('doIt');
    });
}