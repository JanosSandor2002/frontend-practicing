function greet() {
  alert('Üdvözöl a Javascript');
}
function calculate() {
  let num1 = Number(document.getElementById('input1').value);
  let num2 = Number(document.getElementById('input2').value);

  let sum = num1 + num2;
  document.getElementById('sum').innerHTML = sum;
}
function changeColor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  document.querySelector(
    '.container'
  ).style.backgroundColor = `rgb(${r},${g},${b})`;
}
function switchText() {
  let input = document.getElementById('input3').value;
  let tupni = input.split('').reverse().join('');
  document.getElementById('text1').innerHTML = tupni;
}
let b = 0;
function addOne(executable) {
  const a = document.getElementById('text2');
  if (executable === 'add') {
    b++;
  } else if (executable === 'reset') {
    b = 0;
  } else {
    console.log('Wrong input');
  }
  a.innerHTML = b;
}
function listAppend() {
  let input = document.getElementById('input4').value;
  if (input !== '') {
    document.getElementById('warning').innerHTML = '';
    let list = document.getElementById('list');
    let li = document.createElement('li');
    li.textContent = input;
    list.appendChild(li);
  } else {
    document.getElementById('warning').innerHTML =
      'Rossz input, adj meg valamit!';
  }
}
function generate() {
  let a = Number(document.getElementById('input5').value);
  let b = Number(document.getElementById('input6').value);
  let c = Math.floor(Math.random() * (a - b + 1) + b);
  document.getElementById('lucky').innerHTML = c;
}
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  document.getElementById(
    'time'
  ).textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);
updateClock();
