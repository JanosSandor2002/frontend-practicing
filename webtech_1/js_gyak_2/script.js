const People = [
  { nev: 'János Kovács', eletkor: 25, lakcim: 'Budapest' },
  { nev: 'Anna Nagy', eletkor: 30, lakcim: 'Debrecen' },
  { nev: 'Péter Tóth', eletkor: 22, lakcim: 'Szeged' },
];
const Cars = [
  { tipus: 'Toyota Corolla', szin: 'piros', evjarat: 2018 },
  { tipus: 'Ford Focus', szin: 'kék', evjarat: 2020 },
  { tipus: 'Volkswagen Golf', szin: 'fekete', evjarat: 2019 },
  { tipus: 'Honda Civic', szin: 'fehér', evjarat: 2021 },
  { tipus: 'BMW 3 Series', szin: 'ezüst', evjarat: 2017 },
];
function start(value) {
  const peopleid = document.getElementById('peoplestats');
  const randomp = document.getElementById('randomnumber');
  const carlist = document.getElementById('carsstats');
  const datenumber = document.getElementById('datenumber');
  if (value === 'people') {
    peopleid.innerHTML = '';
    People.forEach((e) => {
      peopleid.innerHTML += `<p>Név: ${e.nev}, Életkor: ${e.eletkor} , Lakcím: ${e.lakcim}</p>`;
    });
  } else if (value === 'random') {
    randomp.innerHTML = Math.floor(Math.random() * 991 + 10);
  } else if (value === 'cars') {
    Cars.forEach((e) => {
      let li = document.createElement('li');
      li.innerHTML = `Típus: ${e.tipus}, Szín: ${e.szin}, Évjárat: ${e.evjarat}`;
      carlist.appendChild(li);
    });
  } else if (value === 'date') {
    const datum = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    datenumber.innerHTML = datum.toLocaleDateString('hu-HU', options);
  }
}
