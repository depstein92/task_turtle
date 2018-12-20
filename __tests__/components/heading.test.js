import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Heading from '../../src/containers/Heading';
import * as Aphrodite from 'aphrodite';
import * as AphroditeNoImportant from 'aphrodite/no-important';
import { setup, findByTestAttr } from '../../test_helpers/index';

Enzyme.configure({ adapter: new EnzymeAdapter() });

Aphrodite.StyleSheetTestUtils.suppressStyleInjection();
AphroditeNoImportant.StyleSheetTestUtils.suppressStyleInjection();

test('Heading renders without error', () => {

  const wrapper = shallow(<Heading />);
  expect(wrapper).toBeDefined();
  expect(wrapper.length).toBe(1);
  console.log(wrapper.length);
});

// test('activeItem state changes on click', () => {
//
// });
