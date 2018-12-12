import React from 'react';
import App from '../src/components/app';
import Enzyme, { shallow } from 'enzyme';

export const setup = (props, state=null) => {
 const wrapper = shallow(<App {...props} />);
 if(state) return wrapper.setState(state);
 return wrapper;
}

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}
