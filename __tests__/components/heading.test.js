import React from 'react';
import App from '../../src/components/app';
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

test('Heading renders without error', () => {
  const wrapper = setup();
  const Heading = findByTestAttr(wrapper, 'heading');
  expect(Heading).toBeDefined();
});
