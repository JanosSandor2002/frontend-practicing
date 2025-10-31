async function getUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data[0]);
  } catch (error) {
    console.error('Hiba:', error);
  }
}
getUsers();
