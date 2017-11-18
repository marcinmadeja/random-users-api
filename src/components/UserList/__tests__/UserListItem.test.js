import React from 'react';
import renderer from 'react-test-renderer';

import { singleUser } from 'tests/variables';
import UserListItem from '../UserListItem';

describe('UserListItem', () => {
  const component = renderer.create(<UserListItem user={singleUser} />);

  it('Render correctly with user data', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
