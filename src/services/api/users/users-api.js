export default class UsersApi {
  constructor() {
    this.baseLink = 'https://randomuser.me/api/?';

    this.settings = {
      gender: [],
      page: 0,
      results: 1000,
    };
  }

  async getUsersList(number) {
    const userList = await this.getUsers(number);
    if (userList.error) throw new Error({ label: userList.error });
    return userList.results;
  }

  async getUsers(number) {
    number = parseInt(number, 10);
    const endpoint = `${this.baseLink}results=${number}&seed=abc`;

    try {
      const res = await fetch(endpoint);
      const userList = await res.json();
      return userList;
    } catch (error) {
      console.log(error);
    }
  }

  async searchUsers(searchSettings = {}) {
    const settings = Object.assign(this.settings, searchSettings);

    const searchProp = Object.keys(settings)
      .filter(item => {
        if (Array.isArray(settings[item])) return !!settings[item].length;
        return !!settings[item];
      })
      .map(item => {
        return `${item}=${settings[item]}`;
      })
      .join('&');

    const userList = await this.getUsersCustom(searchProp);
    if (userList.error) throw new Error({ label: userList.error });
    return userList.results;
  }

  async getUsersCustom(link) {
    const endpoint = `${this.baseLink}${link}`;

    try {
      const res = await fetch(endpoint);
      const userList = await res.json();
      return userList;
    } catch (error) {
      console.log(error);
    }
  }
}
