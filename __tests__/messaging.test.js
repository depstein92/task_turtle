import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByTestAttr, storeFactory } from './test_helpers/index';
import configureStore from 'redux-mock-store';
import ReduxPromise from 'redux-promise';
import actionName from '../src/actions/action_names';
import actions from '../src/actions/index';
import axios from 'axios';
import moxios from 'moxios';


Enzyme.configure({ adapter: new EnzymeAdapter() });
// 
// const setup = (initialState={}) => {
//   const store = storeFactory(initialState); //mimicks redux store
//   const wrapper = shallow(<Landing store={store} />).dive();
//   //console.log(wrapper.debug());
//   return wrapper;
// };
//
// describe('')
