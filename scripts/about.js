$('.comfortpic').hover(
  function () {
    let num = this.id.replace('comfortpic', '');
    $(
      'section.j-s-r > h1, section.j-s-r > p, section.j-s-r > span, section.j-s-r > ol'
    ).hide();
    $('#comfort' + num).show();
  },
  function () {
    let num = this.id.replace('comfortpic', '');
    $(
      'section.j-s-r > h1, section.j-s-r > p, section.j-s-r > span, section.j-s-r > ol'
    ).show();
    for (let i = 1; i <= 5; i++) {
      $('#comfort' + i).hide();
    }
  }
);
