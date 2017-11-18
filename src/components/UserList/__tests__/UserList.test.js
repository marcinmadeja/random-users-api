import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import { usersShortList } from 'tests/variables';
import UserList from '../UserList';

describe('UserList', () => {
  const component = renderer.create(<UserList users={usersShortList} />);
  
  it('renders without crashing with no users', () => {
    shallow(<UserList />);
  });

  it('render correctly with four users', () => {
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
