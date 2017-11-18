import React from 'react';
import renderer from 'react-test-renderer';

import { singleUser } from 'tests/variables';
import UserListShortItem from '../UserListShortItem';

describe('UserListShortItem', () => {
  const component = renderer.create(<UserListShortItem user={singleUser} />);

  it('Render correctly with user data', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});