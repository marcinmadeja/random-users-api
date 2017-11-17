const baseLink = 'https://randomuser.me/api/?';
const emptyFunction = () => {};

export async function getUsers(number, cb = emptyFunction, cbError = emptyFunction) {
  number = parseInt(number, 10);
  const endpoint = `${baseLink}results=${number}`;

  try {
    const res = await fetch(endpoint);
    const userList = await res.json();
    cb(userList.results, userList.info);
  } catch (error) {
    console.log(error);
  }
}
