const kep = document.getElementById('kep');
const gomb = document.getElementById('animacioGomb');

gomb.addEventListener('click', () => {
  kep.classList.toggle('animate');
});

const sorok = document.querySelectorAll('table tr');

sorok.forEach((sor) => {
  sor.addEventListener('mouseenter', () => {
    sor.classList.add('hover-row');
  });
  sor.addEventListener('mouseleave', () => {
    sor.classList.remove('hover-row');
  });
});
