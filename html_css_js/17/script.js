const imgNumberArray = [
    'pics/1.jpg',
    'pics/2.jpg',
    'pics/3.jpg',
    'pics/4.jpg',
    'pics/5.jpg',
    'pics/6.jpg',
];
let a = Math.floor(Math.random() * 6);
let b = Math.floor(Math.random() * 6);
document.getElementById('first').setAttribute('src', imgNumberArray[a]);
document.getElementById('second').setAttribute('src', imgNumberArray[b]);
if (a > b) {
    document.querySelector('h1').innerHTML = 'Player 1 Won';
} else if (a < b) {
    document.querySelector('h1').innerHTML = 'Player 2 Won';
} else {
    document.querySelector('h1').innerHTML = 'Tie';
}
