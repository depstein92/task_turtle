import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Heading from '../../src/containers/Heading';
import * as Aphrodite from 'aphrodite';
import * as AphroditeNoImportant from 'aphrodite/no-important';
import { setup, findByTestAttr } from '../../test_helpers/index';

Enzyme.configure({ adapter: new EnzymeAdapter() });

Aphrodite.StyleSheetTestUtils.suppressStyleInjection();
AphroditeNoImportant.StyleSheetTestUtils.suppressStyleInjection();


describe('Heading renders without error', () => {

  test('Heading renders', () => {
    const wrapper = shallow(<Heading />);
    expect(wrapper).toBeDefined();
    expect(wrapper.length).toBe(1);
  });

  test('state changes on button click', () => {
    const wrapper = shallow(<Heading />);
    const home_button = findByTestAttr(wrapper, "home_button" );
    const meme_button = wrapper.find(`[data-test="memes_button"]`);

    expect(wrapper.state().activeItem).toEqual("home");
    //meme_button.simulate('click');
    //expect(wrapper.state().activeItem).toEqual("meme");
  });

});
