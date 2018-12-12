import React from 'react';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { setup, findByTestAttr } from '../../test_helpers/index';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('Heading renders without error', () => {
  const wrapper = setup();
  const Heading = findByTestAttr(wrapper, 'heading');
  expect(Heading).toBeDefined();
});
