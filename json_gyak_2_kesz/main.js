main();

function main() {
  const people = require('./people.json');
  const carl = JSON.stringify(people[0], null, 2);
  const roe = JSON.stringify(people[1], null, 2);
  const kim = JSON.stringify(people[2], null, 2);
  console.log('CARL: ' + carl);
  console.log('Roe: ' + roe);
  console.log('KIM: ' + kim);
}
