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
    console.log('Chosen word:', word.join(''));
  }).fail(function () {
    console.error('data.json could not be loaded');
  });

  $('#button-guess').click(function (e) {
    e.preventDefault();

    if (!word.length) {
      $('#game-status').text('game has not loaded yet, please wait');
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
        `Success! "${guess}" is in the word. Lifes left: ${lives}`
      );

      // Ha minden betű megvan
      if (guessed.every((v) => v === true)) {
        $('#game-status').text(
          `🎉 Congratulations! You figured out the word: "${word.join('')}"!`
        );
        $('#button-guess').prop('disabled', true);
      }
    } else {
      lives--;
      if (lives > 0) {
        $('#game-status').text(`Wrong Guess, Lifes left: ${lives}`);
      } else {
        $('#game-status').text(`💀 You Lost! The word was "${word.join('')}".`);
        $('#button-guess').prop('disabled', true);
      }
    }
  });
});
