import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import { usersShortList } from 'tests/variables';
import UserListShort from '../UserListShort';

describe('UserList', () => {
  const component = renderer.create(<UserListShort users={usersShortList} />);
  
  it('renders without crashing with no users', () => {
    shallow(<UserListShort />);
  });

  it('render correctly with four users', () => {
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
