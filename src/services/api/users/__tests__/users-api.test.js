import UsersApi from '../users-api';

const usersApi = new UsersApi();

describe('API user test', () => {
  it('Should return results array with 10 objects', async () => {
    expect.assertions(1);
    const data = await usersApi.getUsers(10);
    const userList = data.results;
    expect(userList.length).toEqual(10);
  });
});
