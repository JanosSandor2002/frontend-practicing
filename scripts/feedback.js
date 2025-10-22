$(document).ready(function () {
  $('#complex-form').submit(function (e) {
    e.preventDefault();

    let valid = true;
    $('.error').text('');
    $('input, textarea').removeClass('input-error input-valid');

    const name = $('#feedback-name').val().trim();
    const message = $('#message').val().trim();
    const topic = $('#topic').val().trim();
    const satisfaction = $('input[name="satisfaction"]:checked').val();
    const date = $('#date').val();

    const validTopics = [
      'Website Feedback',
      'Bug Report',
      'Feature Request',
      'Other',
    ];

    if (name === '') {
      $('#error-name').text('Name is required.');
      $('#feedback-name').addClass('input-error');
      valid = false;
    } else {
      $('#feedback-name').addClass('input-valid');
    }

    if (message.length < 10) {
      $('#error-message').text('Message must be at least 10 characters long.');
      $('#message').addClass('input-error');
      valid = false;
    } else {
      $('#message').addClass('input-valid');
    }

    if (topic === '') {
      $('#error-topic').text('Please choose or enter a topic.');
      $('#topic').addClass('input-error');
      valid = false;
    } else if (!validTopics.includes(topic)) {
      $('#error-topic').text('Invalid topic. Please select one from the list.');
      $('#topic').addClass('input-error');
      valid = false;
    } else {
      $('#topic').addClass('input-valid');
    }

    if (!satisfaction) {
      $('#error-satisfaction').text('Please select a satisfaction level.');
      valid = false;
    }

    if (date === '') {
      $('#error-date').text('Please select a date.');
      $('#date').addClass('input-error');
      valid = false;
    } else {
      $('#date').addClass('input-valid');
    }

    if (valid) {
      $('#form-status').text('✅ Feedback sent successfully!');
      $('#form-status').css('color', 'green');
    } else {
      $('#form-status').text('❌ Please correct the highlighted errors.');
      $('#form-status').css('color', 'red');
    }
  });
});
