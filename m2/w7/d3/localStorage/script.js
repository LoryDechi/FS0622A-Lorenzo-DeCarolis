var timer = document.getElementById('timer');

window.addEventListener('DOMContentLoaded', function () {
    clock();
});

function clock() {
    var secondi = sessionStorage.getItem('secondi') || 0;
    interval = setInterval(function () {
        timer.innerHTML = 'Tempo: ' + secondi + ' secondi';
        secondi++
        sessionStorage.setItem('secondi', secondi);
    }, 1000);
}