/* eslint-disable */
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { usersApi } from 'services/api/';

import UserBoxList from 'components/UserBoxList/UserBoxList';
import { usersShortList } from 'tests/variables';
import UserListRP from '../UserListRP';

// jest.mock('services/api/', () => {
//   usersApi: jest.fn()
// });

jest.mock('usersApi', () => 'test');

const mockResponse = (status, statusText, response) => {
  return new window.Response(response, {
    status: status,
    statusText: statusText,
    headers: {
      'Content-type': 'application/json'
    }
  });
};

describe('ListItem', async () => {
  const result = Promise.resolve(mockResponse(200, null, '{"id":"1234"}'));
  const parsedResult = Promise.resolve({ "id": "1234" });
  // usersApi.getUsersList.mockImplementation(() => parsedResult);
  // console.log('usersApi', usersApi);


  // const component = shallow(<UserListRP
  //   render={(user) => <UserBoxList users={usersShortList} />}
  // />);

  // const component = renderer
  //   .create(<UserListRP
  //     render={(user) => <UserBoxList users={usersShortList} />}
  //   />);

  it('Render correctly with user data', () => {
    // const tree = component.toJSON();
    // expect(tree).toMatchSnapshot();
  });
});
