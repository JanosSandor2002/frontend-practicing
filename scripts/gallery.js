$(document).ready(function () {
  let pics = [];
  let currentIndex = 0;

  $.getJSON('../data/data.json', function (data) {
    pics = data[2].pics;
    if (pics && pics.length > 0) {
      $('#gallery-pic').attr('src', pics[0]);
    }
  }).fail(function () {
    console.error('Nem sikerült betölteni a data.json fájlt!');
  });

  $('#gallery-left').click(function (e) {
    e.preventDefault();
    if (pics.length === 0) return;

    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = pics.length - 1;
    }

    $('#gallery-pic').attr('src', pics[currentIndex]);
  });

  $('#gallery-right').click(function (e) {
    e.preventDefault();
    if (pics.length === 0) return;

    currentIndex++;
    if (currentIndex >= pics.length) {
      currentIndex = 0;
    }

    $('#gallery-pic').attr('src', pics[currentIndex]);
  });
});
