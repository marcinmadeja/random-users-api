import { getUsers } from '../users-api';

describe('API user test', () => {
  it('Should return results array with 10 objects', async () => {
    expect.assertions(1);
    const data = await getUsers(10);
    const userList = data.results;
    expect(userList.length).toEqual(10);
  });
});
