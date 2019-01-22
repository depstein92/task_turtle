import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByTestAttr, storeFactory } from './test_helpers/index';
import configureStore from 'redux-mock-store';
import ReduxPromise from 'redux-promise';
import Landing from '../src/containers/Landing';
import Landing_Reducer from '../src/reducers/Landing_Reducer';
import actionName from '../src/actions/action_names';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (initialState={}) => {
  const store = storeFactory(initialState); //mimicks redux store
  const wrapper = shallow(<Landing store={store} />).dive();
  //console.log(wrapper.debug());
  return wrapper;
};

/*
------------------------------------------------------
 Testing Reducers instead of actions.
 This is because actions can change,
 but the shape of the returned value in out Reducers
 determines what is rendered on the page.
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
TESTING LOGIN REDUCERS
------------------------------------------------------
*/

describe('login reducer returns apropriate object shape', () => {

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

  test('login reducer returns correct initialState', () => {

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

  test('login reducer success returns mock payload', () => {

    const fetchedData = {
      type: actionName['SEND_LOGIN_INFORMATION_SUCCESS'],
      payload: { data: {} }
    }

    const successState = Landing_Reducer(initialValue, fetchedData);

  });

});
