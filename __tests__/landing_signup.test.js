import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByTestAttr, storeFactory } from './test_helpers/index';
import configureStore from 'redux-mock-store';
import ReduxPromise from 'redux-promise';
import SignUp from '../src/containers/SignUp';
import Landing_Register_User_Reducer from '../src/reducers/Landing_Register_User_Reducer';
import actionName from '../src/actions/action_names';
import actions from '../src/actions/index';
import axios from 'axios';
import moxios from 'moxios';


Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (initialState={}) => {
  const store = storeFactory(initialState); //mimicks redux store
  const wrapper = shallow(<SignUp store={store} />).dive();
  //console.log(wrapper.debug());
  return wrapper;
};

/*
------------------------------------------------------
TESTING BASIC Register INPUT
------------------------------------------------------
*/

describe('User Register component renders', () => {

  test('renders input boxs', () => {
   const wrapper = setup();
   const usernameInput = findByTestAttr(wrapper, "input-username");
   const passwordInput = findByTestAttr(wrapper, "input-password");

   expect(usernameInput.length).toBe(1);
   expect(usernameInput).not.toBeUndefined();

   expect(passwordInput.length).toBe(1);
   expect(passwordInput).not.toBeUndefined();
 });

 test('input boxes change state', () => {
   const wrapper = setup();
   const usernameInput = findByTestAttr(wrapper, "input-username");
   const passwordInput = findByTestAttr(wrapper, "input-password");
   const submitButton = findByTestAttr(wrapper, "submit-signup");

   expect(wrapper.state().userName).toEqual('');
   expect(wrapper.state().password).toEqual('');

   wrapper.setState({ userName: 'bravo' });
   wrapper.setState({ password: 'bravo' });

   submitButton.simulate('click');

   expect(wrapper.state().password).not.toEqual('');
   expect(wrapper.state().userName).not.toEqual('');
 });

});

/*
------------------------------------------------------
TESTING REGISTER ACTIONS
------------------------------------------------------
*/

  test('register user action returns expected payload', () => {

    beforeEach(() => {
      moxios.install();
    });

    afterEach(() => {
      moxios.uninstall();
    });

    const store = storeFactory();

    const response = {
      message: "You have been registered"
    };

    moxios.wait(() => {
      const request = moxios.request.mostRecent();

      request.respondWith({
        status: 200,
        response
      });

      return store.dispatch(actions['REGISTER_USER_SUCCESS']())
             .then(() => {
               const newState = store.getState();
               expect(newState.message).toBe(response.message);
             });
    });






  });
