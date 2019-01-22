import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { createStore } from 'redux';
import rootReducer from '../src/reducers';
import checkPropTypes from 'check-prop-types';

export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState);
}
// 
// export const setup = (props, state=null) => { //testing local state
//    const wrapper = shallow(<App {...props} />).dive();
//    if(state) return wrapper.setState(state);
//    return wrapper;
// }

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'props',
    component.name
  )
   expect(propError).toBe(undefined);
}

// take expected props and see if they throw an error
// This function checks to make sure that props that
// are passed through match prop 'shape'
//defaultProps are being passed through


export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}
