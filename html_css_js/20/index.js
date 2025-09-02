let level = 1;
let array1 = [];
let array2 = [];
addSound();
start();
function start() {
    document.addEventListener('keypress', function () {
        document.querySelector('h1').innerHTML = 'level ' + level;
        play();
    });
}
function play() {
    if (array1.length < 1) {
        console.log('játék hamarosan kezdődik');
    } else {
        console.log(array2);
    }
}
function addSound() {
    let a = document.querySelectorAll('.btn');
    for (let i = 0; i < a.length; i++) {
        a[i].addEventListener('click', function () {
            let audio;
            switch (a[i].classList[1]) {
                case 'blue':
                    array2.add('b');
                    audio = new Audio('sounds/blue.mp3');
                    audio.play();
                    break;
                case 'green':
                    array2.add('g');
                    audio = new Audio('sounds/green.mp3');
                    audio.play();
                    break;
                case 'red':
                    array2.add('r');
                    audio = new Audio('sounds/red.mp3');
                    audio.play();
                    break;
                case 'yellow':
                    array2.add('y');
                    audio = new Audio('sounds/yellow.mp3');
                    audio.play();
                    break;
            }
            animate(a[i].classList[1]);
        });
        console.log(a[i]);
    }
}
const animate = (key) => {
    let b = document.querySelector('.' + key).classList;
    b.add('pressed');
    setTimeout(() => {
        b.remove('pressed');
    }, 100);
};
