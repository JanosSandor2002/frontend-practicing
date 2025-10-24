//for the click
for (let i = 0; i < document.querySelectorAll('.drum').length; i++) {
    document
        .querySelectorAll('.drum')
        [i].addEventListener('click', function () {
            let a = this.innerHTML;
            addAudio(a);
            animate(a);
        });
}
//for the button press
document.addEventListener('keypress', function (event) {
    addAudio(event.key);
    animate(event.key);
});
function addAudio(key) {
    let audio;
    switch (key) {
        case 'w':
            audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case 'a':
            audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case 's':
            audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case 'd':
            audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case 'j':
            audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case 'k':
            audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case 'l':
            audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
    }
}

function animate(key) {
    let active = document.querySelector('.' + key);
    active.classList.add('pressed');

    setTimeout(function () {
        active.classList.remove('pressed');
    }, 100);
}
