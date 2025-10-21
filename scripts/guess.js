$(document).ready(function () {
  let word = '';
  let lives = 10;
  let guessed = [];

  $.getJSON('../data/data.json', function (data) {
    const words = data[1].guesses;
    word = words[Math.floor(Math.random() * words.length)]
      .toLowerCase()
      .split('');
    guessed = Array(word.length).fill(false);
    console.log('Kiválasztott szó:', word.join('')); // ellenőrzéshez
  }).fail(function () {
    console.error('Nem sikerült betölteni a data.json fájlt!');
  });

  $('#button-guess').click(function (e) {
    e.preventDefault();

    if (!word.length) {
      $('#game-status').text(
        'A játék még nem töltődött be, kérlek várj egy pillanatot!'
      );
      return;
    }

    const guess = $('#input-guess').val().toLowerCase();
    $('#input-guess').val('');

    if (guess.length !== 1) {
      $('#game-status').text('Please enter a single character!');
      return;
    }

    let correct = false;

    for (let i = 0; i < word.length; i++) {
      if (word[i] === guess && !guessed[i]) {
        $(`#guessid${i + 1}`).text(guess);
        guessed[i] = true;
        correct = true;
      }
    }

    if (correct) {
      $('#game-status').text(
        `Sikerült! "${guess}" benne van a szóban. Életpont: ${lives}`
      );

      // Ha minden betű megvan
      if (guessed.every((v) => v === true)) {
        $('#game-status').text(
          `🎉 Gratulálok, kitaláltad a szót: "${word.join('')}"!`
        );
        $('#button-guess').prop('disabled', true);
      }
    } else {
      lives--;
      if (lives > 0) {
        $('#game-status').text(`Sajnos nincs a szóban. Életpont: ${lives}`);
      } else {
        $('#game-status').text(
          `💀 Vesztettél! A szó a "${word.join('')}" volt.`
        );
        $('#button-guess').prop('disabled', true);
      }
    }
  });
});
