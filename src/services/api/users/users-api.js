const baseLink = 'https://randomuser.me/api/?';

export async function getUsersList(number) {
  try {
    const userList = await getUsers(number);
    if (userList.error) throw new Error({ label: userList.error });
    return userList.results;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getUsers(number) {
  number = parseInt(number, 10);
  const endpoint = `${baseLink}results=${number}`;

  try {
    const res = await fetch(endpoint);
    const userList = await res.json();
    return userList;
  } catch (error) {
    console.log(error);
  }
}
