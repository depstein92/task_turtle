import App from '../../src/components/app';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { setup, findByTestAttr } from '../../test_helpers/index';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('app renders without crashing', () => {
  const wrapper = setup();
  const App = findByTestAttr(wrapper, 'App');
  expect(App).not.toBeUndefined();
});
