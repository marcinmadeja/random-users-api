const baseLink = 'https://randomuser.me/api/?';

export default class UsersApi {
  constructor() {
    this.baseLink = 'https://randomuser.me/api/?';
  }

  async getUsersList(number) {
    try {
      const userList = await this.getUsers(number);
      if (userList.error) throw new Error({ label: userList.error });
      return userList.results;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async getUsers(number) {
    number = parseInt(number, 10);
    const endpoint = `${this.baseLink}results=${number}`;

    try {
      const res = await fetch(endpoint);
      const userList = await res.json();
      return userList;
    } catch (error) {
      console.log(error);
    }
  }
}
