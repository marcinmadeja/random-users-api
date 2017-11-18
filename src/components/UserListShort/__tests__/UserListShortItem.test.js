import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import { singleUser } from 'tests/variables';
import UserListShortItem from '../UserListShortItem';

describe('UserListShortItem', () => {
  const component = renderer.create(<UserListShortItem user={singleUser} />);

  it('renders without user', () => {
    shallow(<UserListShortItem />);
  });

  it('Render correctly with user data', () => {
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
