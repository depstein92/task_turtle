import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { setup, findByTestAttr } from '../test_helpers/index';
import Heading from '../../src/containers/Feed';
import configureStore from 'redux-mock-store';
import ReduxPromise from 'redux-promise';


Enzyme.configure({ adapter: new EnzymeAdapter() });


test('heading renders without error', () => {
  const wrapper = shallow(<Heading />).dive();
  expect(wrapper).not.toBeUndefined();

});
