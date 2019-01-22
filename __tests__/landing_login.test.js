import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByTestAttr, storeFactory } from './test_helpers/index';
import configureStore from 'redux-mock-store';
import ReduxPromise from 'redux-promise';
import Landing from '../src/containers/Landing';
import Landing_Reducer from '../src/reducers/Landing_Reducer';
import actionName from '../src/actions/action_names';
import actions from '../src/actions/index';
import axios from 'axios';
import moxios from 'moxios';


Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (initialState={}) => {
  const store = storeFactory(initialState); //mimicks redux store
  const wrapper = shallow(<Landing store={store} />).dive();
  //console.log(wrapper.debug());
  return wrapper;
};

/*
------------------------------------------------------
 In this file there are no need to test components hooked up to store.
 Only action creators and local state need to be tested
 -----------------------------------------------------
*/


/*
------------------------------------------------------
TESTING BASIC LOGIN INPUT
------------------------------------------------------
*/

describe('input component renders without error', () => {

  test('renders input box', () => {
    const wrapper = setup();
    const inputbox = findByTestAttr(wrapper, 'input-box');

    expect(inputbox.length).toBe(2);
    expect(inputbox).not.toBeUndefined();
  });

  test('input box changes state', () => {

    const wrapper = setup();
    const inputbox = findByTestAttr(wrapper, 'input-box');
    const submitButton = findByTestAttr(wrapper, 'login-submit');

    expect(wrapper.state().userName).toEqual('');
    expect(wrapper.state().password).toEqual('');

    wrapper.setState({ userName: 'dimpt' });
    wrapper.setState({ password: 'dimpt' });

    submitButton.simulate('click');

    expect(wrapper.state().password).not.toEqual('');
    expect(wrapper.state().userName).not.toEqual('');
  })
});


/*
------------------------------------------------------
TESTING LOGIN ACTIONS
------------------------------------------------------
*/

describe('login action returns expected payload', () => {

  const initialValue = {
    loading: false,
    isLoggedIn: {
      data:{
        message:' ',
        logged_in: false
      }
    },
    payload: {
      name: {
        title: 'Loading...',
        first: 'Loading...',
        last: 'Loading... '
      },
      picture: {
        large: 'https://react.semantic-ui.com/images/avatar/large/patrick.png',
        medium: 'https://react.semantic-ui.com/images/avatar/large/patrick.png',
        thumbnail: 'https://react.semantic-ui.com/images/avatar/large/patrick.png'
      },
      description: {

      }
    },
    error: false,
  };

  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });


  test('login action does not fail Post request', () => {

    const initialState = Landing_Reducer(initialValue, {type: 'None'});

    expect(initialState).not.toBeUndefined();
    expect(initialState).not.toEqual({});
    expect(initialState).not.toBeFalsy();
    expect(initialState).toBeTruthy();
    expect(initialState).toEqual(initialValue);
    expect(initialState.loading).toBe(false);
    expect(Object.values(initialState.isLoggedIn.data).length).toBe(2);
    expect(Object.values(initialState).length).toBe(4);
  });

  test('login action success returns mock payload', () => {

    const store = storeFactory();

    const response = {
      message: "User Logged in successfully",
      logged_in: true
    }

    //testing action creator

    moxios.wait(() => {
       const request = moxios.request.mostRecent();

        request.respondWith({
          status: 200,
          response
        });

        return store.dispatch(actions['SEND_LOGIN_INFORMATION_SUCCESS']())
          .then(() => {
            const newState = store.getState();
            expect(newState.message).toEqual(response.message);
            expect(newState.logged_in).toBe(response.logged_in);
          });
    });
  });
});
