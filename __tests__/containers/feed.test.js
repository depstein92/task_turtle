import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { setup, findByTestAttr } from '../../test_helpers/index';
import Feed from '../../src/containers/Feed';
import configureStore from 'redux-mock-store';
import ReduxPromise from 'redux-promise';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const middlewares = [ReduxPromise],
      mockStore = configureStore(middlewares);

describe('Feed renders without error', () => {

  // const initialState = { loading: false, error: false, initialLoad: true },
  //       store = mockStore(initialState),
  //       wrapper = mount(<Feed store={store} />);
  //
  // test('test prop types in Feed Container', () => {
  //   expect(wrapper.not.toBeUndefined);
  //   expect(wrapper.state().memes).toEqual(expect.not.objectContaining(initialState));
  //
  // });
});
