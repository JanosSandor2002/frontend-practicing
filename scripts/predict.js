$(document).ready(function () {
  let predictions = [];

  $.getJSON('../data/data.json')
    .done(function (data) {
      predictions = data.predictions;
      console.log('Predictions loaded:');

      $('#button-predict').click(function () {
        $('h1.mrg-b-1, h2.mrg-b-3, p.txt-aln-j, h2.mrg-t-3').hide();
        const today = new Date();
        const day = today.getDate();
        const dayLastDigit = day % 10;

        $('#date-predict').text(today.toLocaleDateString()).show();
        $('#details-predict').text(predictions[dayLastDigit]).show();
      });
    })
    .fail(function () {
      console.error('JSON betöltés sikertelen!');
    });
});
