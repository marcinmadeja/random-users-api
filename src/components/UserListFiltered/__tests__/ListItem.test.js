import React from 'react';
import renderer from 'react-test-renderer';

import { singleUser } from 'tests/variables';
import ListItem from '../ListItem';

describe('ListItem', () => {
  const component = renderer.create(<ListItem user={singleUser} />);

  it('Render correctly with user data', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
