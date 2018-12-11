import App from '../../src/components/app';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props, state=null) => {
  const wrapper = shallow(<App {...props} />);
  if(state) return wrapper.setState(state);
  return wrapper;
}

const findByTestAttr = (wrapper, val) => {
 return wrapper.find(`[data-test="${val}"]`);
}

test('app renders without crashing', () => {
  const wrapper = setup();
  const App = findByTestAttr(wrapper, 'App');
  expect(App).not.toBeUndefined();
});

// test('', () => {
//
// });
