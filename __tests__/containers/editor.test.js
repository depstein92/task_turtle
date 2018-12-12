import React from 'react';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { setup, findByTestAttr } from '../../test_helpers/index';
import Editor from '../../src/containers/Editor';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('Editor renders without error', () => {
  const wrapper = setup();
  const Editor = findByTestAttr(wrapper, 'Editor');
  expect(Editor).not.toBeUndefined();
});
