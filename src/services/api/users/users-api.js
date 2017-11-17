const baseLink = 'https://randomuser.me/api/?';
const emptyFunction = () => {};

export function getUsers(number, cb = emptyFunction, cbError = emptyFunction) {
  number = parseInt(number, 10);
  const endpoint = `${baseLink}results=${number}`;

  fetch(endpoint)
    .then(usersList => usersList.json())
    .then(userList => {
      console.log(userList);
      cb(userList.results, userList.info);
    })
    .catch(error => {
      console.log(error);
      cbError(error);
    });
}
