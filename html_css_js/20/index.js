let level = 1;
let array1 = [];
let array2 = [];
let acceptingInput = false; // true, ha a játékos tud gombot nyomni

const colors = ['red', 'green', 'blue', 'yellow'];

startGame();
addSound();

function startGame() {
    document.querySelector('h1').innerText = 'Nyomj egy gombot a kezdéshez';
    document.addEventListener('keypress', function handler() {
        document.removeEventListener('keypress', handler);
        nextLevel();
    });
}

function nextLevel() {
    array2 = []; // játékos lépéseinek törlése
    document.querySelector('h1').innerText = 'Level ' + level;

    const nextColor = colors[Math.floor(Math.random() * 4)];
    array1.push(nextColor);

    acceptingInput = false; // ne lehessen kattintani animáció közben

    // animációk sorban
    array1.forEach((color, i) => {
        setTimeout(() => {
            animate(color);
            playSound(color);
        }, i * 600);
    });

    // engedélyezés a játékosnak a következő szintnél
    setTimeout(() => {
        acceptingInput = true;
    }, array1.length * 600);
}

function addSound() {
    document.querySelectorAll('.btn').forEach((btn) => {
        btn.addEventListener('click', () => {
            if (!acceptingInput) return; // ha animáció megy, ne lehessen kattintani

            let color = btn.classList[1];
            array2.push(color);

            playSound(color);
            animate(color);

            // ellenőrizzük az aktuális lépést
            let index = array2.length - 1;
            if (array2[index] !== array1[index]) {
                gameOver();
            } else if (array2.length === array1.length) {
                level++;
                setTimeout(nextLevel, 1000); // új szint
            }
        });
    });
}

function animate(color) {
    const btn = document.querySelector('.' + color);
    btn.classList.add('pressed');
    setTimeout(() => btn.classList.remove('pressed'), 200);
}

function playSound(color) {
    const audio = new Audio('sounds/' + color + '.mp3');
    audio.play();
}

function gameOver() {
    acceptingInput = false;
    document.querySelector('h1').innerText =
        'Vesztettél! Nyomj egy billentyűt a kezdéshez';
    array1 = [];
    array2 = [];
    level = 1;

    document.addEventListener('keypress', function handler() {
        document.removeEventListener('keypress', handler);
        nextLevel();
    });
}
