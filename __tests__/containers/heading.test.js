import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { setup, findByTestAttr } from '../../test_helpers/index';
import Heading from '../../src/containers/Feed';
import configureStore from 'redux-mock-store';
import ReduxPromise from 'redux-promise';


Enzyme.configure({ adapter: new EnzymeAdapter() });

const middlewares = [ReduxPromise],
      mockStore = configureStore(middlewares);


test('heading renders without error', () => {
  const wrapper = shallow(<Heading />);
  expect(wrapper).not.toBeUndefined();

});
