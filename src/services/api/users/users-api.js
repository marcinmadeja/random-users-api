const baseLink = 'https://randomuser.me/api/?';

function getUsers(number) {
  number = parseInt(number, 10);
  const endpoint = `${baseLink}results=${number}`;
  fetch(baseLink)
    .then(usersList => usersList.json())
    .then(userList => {
      console.log(userList);
    });
}
