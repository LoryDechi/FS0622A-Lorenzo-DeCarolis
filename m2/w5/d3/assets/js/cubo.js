document.getElementById('avanti').addEventListener('mouseover', function () {
    let gradi = 0;
    document.getElementById('cube-1').style.transform += `rotateY(${gradi -= 25}deg)`;
    document.getElementById('cube-2').style.transform += `rotateY(${gradi -= 0}deg)`;
    document.getElementById('cube-3').style.transform += `rotateY(${gradi -= 0}deg)`;
});

document.getElementById('avanti').addEventListener('mouseout', function () {
    let gradi = 0;
    document.getElementById('cube-1').style.transform += `rotateY(${gradi += 25}deg)`;
    document.getElementById('cube-2').style.transform += `rotateY(${gradi += 0}deg)`;
    document.getElementById('cube-3').style.transform += `rotateY(${gradi += 0}deg)`;
})

document.getElementById('indietro').addEventListener('mouseover', function () {
    let gradi = 0;
    document.getElementById('cube-1').style.transform += `rotateY(${gradi += 25}deg)`;
    document.getElementById('cube-2').style.transform += `rotateY(${gradi += 0}deg)`;
    document.getElementById('cube-3').style.transform += `rotateY(${gradi += 0}deg)`;
});
document.getElementById('indietro').addEventListener('mouseout', function () {
    let gradi = 0;
    document.getElementById('cube-1').style.transform += `rotateY(${gradi -= 25}deg)`;
    document.getElementById('cube-2').style.transform += `rotateY(${gradi -= 0}deg)`;
    document.getElementById('cube-3').style.transform += `rotateY(${gradi -= 0}deg)`;
})

document.getElementById('avanti').addEventListener('click', function () {
    let gradi = 0;
    document.getElementById('cube-1').style.transform += `rotateY(${gradi -= 90}deg)`;
    document.getElementById('cube-2').style.transform += `rotateY(${gradi -= 0}deg)`;
    document.getElementById('cube-3').style.transform += `rotateY(${gradi -= 0}deg)`;
})

document.getElementById('indietro').addEventListener('click', function () {
    let gradi = 0;
    document.getElementById('cube-1').style.transform += `rotateY(${gradi += 90}deg)`;
    document.getElementById('cube-2').style.transform += `rotateY(${gradi += 0}deg)`;
    document.getElementById('cube-3').style.transform += `rotateY(${gradi += 0}deg)`;
})

//AUTOPLAY
document.getElementById('play').addEventListener('click', function () {
    classe = document.getElementById('cube-1').classList.contains('animation');
    if (classe == true) {
        document.getElementById('cube-1').classList.remove('animation');
        document.getElementById('cube-2').classList.remove('animation');
        document.getElementById('cube-3').classList.remove('animation');
    } else {
        document.getElementById('cube-1').className += ' animation';
        document.getElementById('cube-2').className += ' animation';
        document.getElementById('cube-3').className += ' animation';
    }
})
