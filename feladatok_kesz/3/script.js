function changeCss() {
  let link = document.getElementById('changable');
  linkAttribute = link.getAttribute('href');
  if (linkAttribute === 'styles.css') {
    link.setAttribute('href', 'styles2.css');
  } else if (linkAttribute === 'styles2.css') {
    link.setAttribute('href', 'styles.css');
  } else {
    console.log('Something is wrong!');
  }
}
