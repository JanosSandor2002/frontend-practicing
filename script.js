let theme = localStorage.getItem('theme') || 'dark';
if (theme === 'light') {
  $(':root').addClass('light-theme');
  $('.icon').css('filter', 'invert(0)');
  $('.hero2').css('filter', 'invert(0)');
  $('#wallpaper1,#wallpaper2').css('display', 'none');
} else {
  $(':root').removeClass('light-theme');
  $('.icon').css(
    'filter',
    'brightness(0) invert(1) sepia(1) saturate(3) hue-rotate(140deg)'
  );
  $('.hero2').css('filter', 'invert(1)');
  $('#wallpaper1,#wallpaper2').css('display', 'block');
}
$('#hero-image-1').click(() => {
  console.log('Theme toggle started');
  if (theme === 'dark') {
    theme = 'light';
    $(':root').addClass('light-theme');
    $('.icon').css('filter', 'invert(0)');
    $('.hero2').css('filter', 'invert(0)');
    $('#wallpaper1,#wallpaper2').css('display', 'none');
  } else {
    theme = 'dark';
    $(':root').removeClass('light-theme');
    $('.icon').css(
      'filter',
      'brightness(0) invert(1) sepia(1) saturate(3) hue-rotate(140deg)'
    );
    $('.hero2').css('filter', 'invert(1)');
    $('#wallpaper1,#wallpaper2').css('display', 'block');
  }

  console.log('Theme changed to: ' + theme);
  localStorage.setItem('theme', theme);
  console.log('theme saved in localstorage');
});
$('.icon').hover(
  function () {
    if (theme === 'dark') {
      $(this).css(
        'filter',
        'brightness(0) invert(1) sepia(1) saturate(3) hue-rotate(140deg)'
      );
    } else {
      $(this).css('filter', 'brightness(0) invert(0)');
    }
  },
  function () {
    if (theme === 'dark') {
      $(this).css('filter', 'invert(1)');
    } else {
      $(this).css('filter', 'none');
    }
  }
);
