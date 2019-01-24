import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { findByTestAttr, storeFactory } from './test_helpers/index';
import EditProfile from '../src/containers/EditProfile';
import actionName from '../src/actions/action_names';
import actions from '../src/actions/index';
import axios from 'axios';
import moxios from 'moxios';


Enzyme.configure({ adapter: new EnzymeAdapter() });

//wrapper is not connected to store
const setup = (initialState={}) => {
  const store = storeFactory(initialState); //mimicks redux store
  const wrapper = shallow(<EditProfile store={store} />).dive();
  console.log(wrapper.debug());
  return wrapper;
};

describe('testing local state change in EditProfile form', () => {

  const wrapper = setup();
  const submitButton = findByTestAttr(wrapper, 'submitButton');
  const fileInput = findByTestAttr(wrapper, 'file-input');
  const descriptionInput = findByTestAttr(wrapper, 'description-input');

  test('component lengths to be one and not undefined', () => {
    expect(submitButton.length).toBe(1);
    expect(fileInput.length).toBe(1);
    expect(descriptionInput.length).toBe(1);

    expect(fileInput).not.toBeUndefined();
    expect(descriptionInput).not.toBeUndefined();
    expect(submitButton).not.toBeUndefined();
  });

  test('test text input change', () => {

    fileInput.first().simulate('change', {target: { value: 'my new value' }});
    descriptionInput.first().simulate('change', {target: { value: 'my new value' }});

    expect(fileInput.node.value).not.toBeUndefined();
    expect(fileInput.node.value).not.toBe('');


  });
})
