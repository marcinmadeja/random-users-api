import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import UsersApi from 'services/api/users/users-api';

import UserBoxList from 'components/UserBoxList/UserBoxList';
import { usersShortList } from 'tests/variables';
import UserListRP from '../UserListRP';

describe('ListItem', () => {
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
