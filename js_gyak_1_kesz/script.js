document.getElementById('diakForm').addEventListener('submit', function (e) {
  e.preventDefault();
  let valid = true;
  function showError(id, message) {
    document.getElementById(id).innerText = message;
    valid = false;
  }
  function clearError(id) {
    document.getElementById(id).innerText = '';
  }
  let nev = document.getElementById('nev');
  nev.classList.remove('error-border');
  clearError('nevError');
  if (!nev.value.trim()) {
    showError('nevError', 'Kötelező megadni a nevet.');
    nev.classList.add('error-border');
  }
  let lakcim = document.getElementById('lakcim');
  lakcim.classList.remove('error-border');
  clearError('lakcimError');
  if (!lakcim.value.trim()) {
    showError('lakcimError', 'Kötelező megadni a lakcímet.');
    lakcim.classList.add('error-border');
  }
  let kor = document.getElementById('kor');
  kor.classList.remove('error-border');
  clearError('korError');
  if (!kor.value || kor.value < 18 || kor.value > 100) {
    showError('korError', 'Érvénytelen életkor. 18 és 100 között kell lennie.');
    kor.classList.add('error-border');
  }
  let anyjaNeve = document.getElementById('anyjaNeve');
  anyjaNeve.classList.remove('error-border');
  clearError('anyjaNeveError');
  if (!anyjaNeve.value.trim()) {
    showError('anyjaNeveError', 'Kötelező megadni az anyja nevét.');
    anyjaNeve.classList.add('error-border');
  }
  let egyetem = document.getElementById('egyetem');
  egyetem.classList.remove('error-border');
  clearError('egyetemError');
  if (!egyetem.value.trim()) {
    showError('egyetemError', 'Kötelező megadni az egyetemet.');
    egyetem.classList.add('error-border');
  }
  let kar = document.getElementById('kar');
  kar.classList.remove('error-border');
  clearError('karError');
  if (!kar.value.trim()) {
    showError('karError', 'Kötelező megadni a kart.');
    kar.classList.add('error-border');
  }
  let szak = document.getElementById('szak');
  szak.classList.remove('error-border');
  clearError('szakError');
  if (!szak.value.trim()) {
    showError('szakError', 'Kötelező megadni a szak nevét.');
    szak.classList.add('error-border');
  }
  let diakIgSzam = document.getElementById('diakIgSzam');
  diakIgSzam.classList.remove('error-border');
  clearError('diakIgSzamError');
  let diakRegex = /^\d{11}$/;
  if (!diakIgSzam.value.match(diakRegex)) {
    showError('diakIgSzamError', 'A diákigazolvány szám 11 számjegy legyen.');
    diakIgSzam.classList.add('error-border');
  }
  let adatkezeles = document.getElementById('adatkezeles');
  clearError('adatkezelesError');
  if (!adatkezeles.checked) {
    showError(
      'adatkezelesError',
      'El kell fogadni az adatkezelési szabályzatot.'
    );
  }
  if (valid) {
    alert('Az űrlap sikeresen elküldve!');
    this.reset();
  }
});
