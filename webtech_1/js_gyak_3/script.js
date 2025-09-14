const form = document.getElementById('munkavallaloForm');
const hibakDiv = document.getElementById('hibak');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  hibakDiv.innerHTML = '';
  let hibak = [];
  const nev = document.getElementById('nev');
  const eletkor = document.getElementById('eletkor');
  const munkahely = document.getElementById('munkahely');
  const fizetes = document.getElementById('fizetes');
  const leiras = document.getElementById('leiras');
  const vegzettseg = document.getElementById('vegzettseg');
  const nemFerfi = document.getElementById('ferfi');
  const nemNo = document.getElementById('no');
  [
    nev,
    eletkor,
    munkahely,
    fizetes,
    leiras,
    vegzettseg,
    nemFerfi,
    nemNo,
  ].forEach((el) => {
    el.classList.remove('error');
  });
  if (nev.value.trim().length < 10) {
    hibak.push('A név legalább 10 karakter legyen!');
    nev.classList.add('error');
  }
  if (eletkor.value === '' || eletkor.value < 0 || eletkor.value > 120) {
    hibak.push('Az életkor 0 és 120 közötti szám legyen!');
    eletkor.classList.add('error');
  }
  if (munkahely.value.trim().length < 5) {
    hibak.push('A munkahely neve legalább 5 karakter legyen!');
    munkahely.classList.add('error');
  }
  if (fizetes.value === '' || fizetes.value < 200) {
    hibak.push('A fizetés minimum 200 eFt legyen!');
    fizetes.classList.add('error');
  }
  if (leiras.value.trim().length < 200) {
    hibak.push('A munkaköri leírás legalább 200 karakter legyen!');
    leiras.classList.add('error');
  }
  if (vegzettseg.value === '') {
    hibak.push('A végzettség kiválasztása kötelező!');
    vegzettseg.classList.add('error');
  }
  if (!nemFerfi.checked && !nemNo.checked) {
    hibak.push('A nem kiválasztása kötelező!');
    nemFerfi.classList.add('error');
    nemNo.classList.add('error');
  }
  if (hibak.length > 0) {
    hibakDiv.innerHTML = '<ul><li>' + hibak.join('</li><li>') + '</li></ul>';
  } else {
    hibakDiv.innerHTML = "<p style='color:green'>Sikeres mentés!</p>";
    form.reset();
  }
});
