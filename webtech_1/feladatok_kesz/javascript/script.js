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
function calcChar() {
  const counter = document.getElementById('countingid').value.length;
  if (counter < 51) {
    document.getElementById('number4').innerHTML = counter;
  } else {
    document.getElementById('number4').innerHTML = 'More than 50 chars';
  }
}
let isHidden = false;
const p = document.getElementById('secretid');
p.innerHTML = 'Titkos üzenet: Jól haladsz Javascripttel';
p.style.display = 'none';
function secret() {
  const button = document.getElementById('secretbutton');
  if (!isHidden) {
    button.innerHTML = 'Elrejt';
    p.style.display = 'block';
    isHidden = true;
  } else {
    button.innerHTML = 'Megnyit';
    p.style.display = 'none';
    isHidden = false;
  }
}
const img = document.getElementById('pic');
const imgArray = [
  'https://m.media-amazon.com/images/I/61pFab9tNeL._AC_SX679_.jpg',
  'https://cdn11.bigcommerce.com/s-2sxhiat0li/images/stencil/1280x1280/products/178/1159/V5M5000-3N_AD__42614.1712290146.jpg?c=2',
  'https://cdn.media.amplience.net/i/frasersdev/80307301_o?fmt=auto&upscale=false&w=767&h=767&sm=scaleFit&$h-ttl$',
  'https://i5.walmartimages.com/seo/Wilson-Super-Soft-Play-Volleyball-Official-Size-White-Red-Blue_9ec43bc8-5760-4268-a4e5-3741b44d0f23.78108b40cb7ccffcb5260229f98df228.png?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
];
img.setAttribute('src', imgArray[0]);
let i = 0;
function imgChange(direction) {
  if (direction === 'left') {
    i--;
  } else if (direction === 'right') {
    i++;
  }
  if (i < 0) {
    i = imgArray.length - 1;
  } else if (i > imgArray.length - 1) {
    i = 0;
  }
  img.setAttribute('src', imgArray[i]);
}

let p2 = document.getElementById('question');
let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let b3 = document.getElementById('b3');
let answer = document.getElementById('answer');
let questions = [
  'A falu kisebb mint város?',
  'A falu nem kisebb mint a város?',
  'A falu ugyanolyan fontos tud lenni mint a város?',
  'A kutyák ki fogják tudni fejleszteni a beszédet?',
  'A macskáknak 9 életük van?',
];
let k = 0;
p2.innerHTML = questions[k];
function choice(ans) {
  b1.style.backgroundColor = '';
  b2.style.backgroundColor = '';
  b3.style.backgroundColor = '';
  switch (k) {
    case 0:
      if (ans === 'yes') {
        b1.style.backgroundColor = 'green';
        k++;
        answer.innerHTML = 'Helyes';
      } else {
        answer.innerHTML = 'Rossz';
        if (ans === 'no') {
          b2.style.backgroundColor = 'red';
        } else if (ans === 'maybe') {
          b3.style.backgroundColor = 'red';
        }
      }
      break;
    case 1:
      if (ans === 'no') {
        b2.style.backgroundColor = 'green';
        k++;
        answer.innerHTML = 'Helyes';
      } else {
        answer.innerHTML = 'Rossz';
        if (ans === 'yes') {
          b1.style.backgroundColor = 'red';
        } else if (ans === 'maybe') {
          b3.style.backgroundColor = 'red';
        }
      }
      break;
    case 2:
      if (ans === 'yes') {
        b1.style.backgroundColor = 'green';
        k++;
        answer.innerHTML = 'Helyes';
      } else {
        answer.innerHTML = 'Rossz';
        if (ans === 'no') {
          b2.style.backgroundColor = 'red';
        } else if (ans === 'maybe') {
          b3.style.backgroundColor = 'red';
        }
      }
      break;
    case 3:
      if (ans === 'maybe') {
        b3.style.backgroundColor = 'green';
        k++;
        answer.innerHTML = 'Helyes';
      } else {
        answer.innerHTML = 'Rossz';
        if (ans === 'no') {
          b2.style.backgroundColor = 'red';
        } else if (ans === 'yes') {
          b3.style.backgroundColor = 'red';
        }
      }
      break;
    case 4:
      if (ans === 'yes') {
        b1.style.backgroundColor = 'green';
        k++;
        answer.innerHTML = 'Helyes';
      } else {
        answer.innerHTML = 'Rossz';
        if (ans === 'no') {
          b2.style.backgroundColor = 'red';
        } else if (ans === 'maybe') {
          b3.style.backgroundColor = 'red';
        }
      }
      break;
  }
  if (k >= 0 && k <= questions.length - 1) {
    p2.innerHTML = questions[k];
  } else {
    k = 0;
    p2.innerHTML = questions[k];
  }
}

let feedback = document.getElementById('figuring');
const randomNumForIt = Math.floor(Math.random() * (100 - 1 + 1) + 1);
function figure() {
  let searchinput = Number(document.getElementById('input10').value);
  if (randomNumForIt === searchinput) {
    feedback.innerHTML = 'Kitaláltad!';
  } else if (randomNumForIt > searchinput) {
    feedback.innerHTML = 'A számod kisebb!';
  } else {
    feedback.innerHTML = 'A számod nagyobb!';
  }
}
let szorzolista = document.getElementById('szorzolista');
const szorzas = () => {
  szorzolista.innerHTML = '';
  let szorzo = Number(document.getElementById('szorzo').value);
  for (let i = 1; i <= 10; i++) {
    let li = document.createElement('li');
    li.textContent = String(i * szorzo);
    szorzolista.appendChild(li);
  }
};

const valtas = () => {
  let valtoszoveg = document.getElementById('valtoszoveg');
  if (valtoszoveg.innerHTML === 'Helló Világ!') {
    valtoszoveg.innerHTML = 'Szia, Javascript!';
  } else {
    valtoszoveg.innerHTML = 'Helló Világ!';
  }
};

const szamol = () => {
  let number1 = Number(document.getElementById('numberr1').value);
  let number2 = Number(document.getElementById('numberr2').value);
  let muvelet = document.getElementById('muveletvalaszto').value;
  eredmeny = document.getElementById('eredmeny');
  if (muvelet === '+') {
    eredmeny.innerHTML = String(number1 + number2);
  } else {
    eredmeny.innerHTML = String(number1 - number2);
  }
};

let timerId;
const visszaszamol = () => {
  let input = Number(document.getElementById('szamlalo').value);
  let answer = document.getElementById('idojelzes');
  clearInterval(timerId);
  if (input <= 0) {
    answer.innerHTML = 'Adj meg 1 vagy több másodpercet!';
    return;
  }
  answer.innerHTML = input;
  timerId = setInterval(() => {
    input--;
    if (input > 0) {
      answer.innerHTML = input;
    } else {
      clearInterval(timerId);
      answer.innerHTML = 'Lejárt az idő!';
    }
  }, 1000);
};
document.getElementById('allatkep').style.display = 'none';
document.getElementById('jelzo').innerHTML = 'Nincs Találat';
document.getElementById('jelzo').style.display = 'none';
const keres = () => {
  let allatnev = document.getElementById('allatnev').value.toLowerCase();
  let allatkep = document.getElementById('allatkep');
  if (allatnev === 'kutya') {
    allatkep.style.display = 'block';
    document.getElementById('jelzo').style.display = 'none';
    allatkep.setAttribute(
      'src',
      'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQVynCKVIBbHbdhHMSATTYNolAfbcrKK_SXitAEh0DnPGyo72mp6s_cw0bQvtjcGN5BOeoSGStP7F_QV9HWW1xDDci9Ck8rj3WMq2_k0L6c'
    );
  } else if (allatnev === 'macska') {
    allatkep.style.display = 'block';
    document.getElementById('jelzo').style.display = 'none';
    allatkep.setAttribute(
      'src',
      'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQpEWgZxt_-scEYSG3Dn88YuwQwo2KQVplIy98Pv7ev3IUxcEyzKiJmZfsabmJyV-QstpOHe3Z1s66zRQbnMhMmRdUA7J-EvqVEaNfjiqO5'
    );
  } else {
    allatkep.setAttribute('src', '');
    allatkep.style.display = 'none';
    document.getElementById('jelzo').style.display = 'block';
  }
};

let toltelek = document.getElementById('toltelek');
toltelek.innerHTML = 'minden kitöltve!';
toltelek.style.display = 'none';

const check = () => {
  toltelek.style.display = 'none';
  let name = document.getElementById('name').value;
  let pswd = document.getElementById('password').value;
  let email = document.getElementById('email').value;

  if (name === '' || pswd === '' || email === '') {
    alert('Ne hagyd üresen semelyiket!');
  } else {
    toltelek.style.display = 'block';
  }
};

const emailcheck = () => {
  let email = document.getElementById('emailcheck').value;
  let span = document.getElementById('erveny');

  const atIndex = email.indexOf('@');
  const lastDotIndex = email.lastIndexOf('.');

  if (
    atIndex > 0 &&
    lastDotIndex > atIndex &&
    lastDotIndex < email.length - 1
  ) {
    span.innerHTML = 'Érvényes formátum';
    span.style.color = 'green';
  } else {
    span.innerHTML = 'Érvénytelen formátum';
    span.style.color = 'red';
  }
};
const ellenorizJelszo = () => {
  const jelszo5 = document.getElementById('password5').value;
  const jelszo6 = document.getElementById('password6').value;
  const visszajelzes = document.getElementById('jelszoVisszajelzes');

  if (jelszo5 === '' || jelszo6 === '') {
    visszajelzes.innerHTML = 'Mindkét mezőt ki kell tölteni!';
    visszajelzes.style.color = 'red';
  } else if (jelszo5 !== jelszo6) {
    visszajelzes.innerHTML = 'A jelszavak nem egyeznek!';
    visszajelzes.style.color = 'red';
  } else {
    visszajelzes.innerHTML = 'A jelszavak egyeznek!';
    visszajelzes.style.color = 'green';
  }
};
