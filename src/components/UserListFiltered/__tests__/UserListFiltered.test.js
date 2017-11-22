import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import { usersShortList } from 'tests/variables';
import UserListFiltered from '../UserListFiltered';

describe('UserList', () => {
  const component = renderer.create(<UserListFiltered users={usersShortList} />);

  it('renders without crashing with no users', () => {
    shallow(<UserListFiltered />);
  });

  it('render correctly with four users', () => {
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
