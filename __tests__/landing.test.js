import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByTestAttr, storeFactory } from '../test_helpers/index';
import configureStore from 'redux-mock-store';
import ReduxPromise from 'redux-promise';
import Landing from '../src/Landing';

Enzyme.configure({ adapter: new EnzymeAdapter() });
//
// const setup = (initialState={}) => {
//   const store = storeFactory(initialState); //mimicks redux store
//   const wrapper = shallow(<Input store={store} />).dive();
//   //console.log(wrapper.debug());
//   return wrapper;
// };

export const setup = (props, state=null) => { //testing local state
   const wrapper = shallow(<Landing {...props} />).dive();
   if(state) return wrapper.setState(state);
   return wrapper;
}

describe(' input component renders without error', () => {

  test('renders input box', () => {
    const wrapper = setup();
    const inputbox = findByTestAttr(wrapper, 'input-box');
    expect(inputbox.length).toBe();
  });



});
