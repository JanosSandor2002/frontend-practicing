const form = document.getElementById('urlap');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const mezok = [
    {
      id: 'nev',
      szabaly: (v) => v.trim().length >= 10,
      uzenet: 'A név legalább 10 karakter legyen!',
    },
    {
      id: 'szuldatum',
      szabaly: (v) => v !== '',
      uzenet: 'A születési dátum megadása kötelező!',
    },
    {
      id: 'anyja',
      szabaly: (v) => v.trim().length >= 10,
      uzenet: 'Az anyja neve legalább 10 karakter legyen!',
    },
    {
      id: 'taj',
      szabaly: (v) => /^\d{8}$/.test(v),
      uzenet: 'A TAJ szám 8 számjegy legyen!',
    },
    {
      id: 'neme',
      szabaly: (v) => v !== '',
      uzenet: 'A nem kiválasztása kötelező!',
    },
    {
      id: 'irszam',
      szabaly: (v) => /^\d{4}$/.test(v),
      uzenet: 'Az irányítószám 4 számjegy legyen!',
    },
    {
      id: 'telepules',
      szabaly: (v) => v.trim().length >= 2,
      uzenet: 'A település neve legalább 2 karakter legyen!',
    },
    {
      id: 'utca',
      szabaly: (v) => v.trim().length >= 2,
      uzenet: 'Az utca neve legalább 2 karakter legyen!',
    },
    {
      id: 'hazszam',
      szabaly: (v) => parseInt(v) >= 1,
      uzenet: 'A házszám minimum 1 legyen!',
    },
  ];

  let hibak = 0;

  mezok.forEach((m) => {
    const mezo = document.getElementById(m.id);
    const hibaDiv = document.getElementById(m.id + 'Hiba');

    if (!m.szabaly(mezo.value)) {
      mezo.classList.add('error');
      hibaDiv.textContent = m.uzenet;
      hibak++;
    } else {
      mezo.classList.remove('error');
      hibaDiv.textContent = '';
    }
  });

  if (hibak === 0) {
    alert('Sikeres mentés!');
    form.reset();
  }
});
