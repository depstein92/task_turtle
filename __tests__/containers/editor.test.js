import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { setup, findByTestAttr } from '../../test_helpers/index';
import Editor from '../../src/containers/Editor';

Enzyme.configure({ adapter: new EnzymeAdapter() });


describe('Editor runs without error', () => {

  test('Editor renders without error', () => {
    const wrapper = setup();
    const Editor = findByTestAttr(wrapper, 'Editor');
    expect(Editor).not.toBeUndefined();
    expect(Editor.length).toEqual(0);
  });

});

describe('draggable narrative object in Editor renders', () => {

  test('narrative content shows', () => {
    const wrapper = setup();
    const draggableNarrative = findByTestAttr(wrapper,'draggable-narrative');
    const addImageButton = findByTestAttr(wrapper, 'add-image-button');

    expect(draggableNarrative).not.toBeUndefined();
    expect(draggableNarrative.length).toEqual(0);

  });

  test('narrative content to be draggable', () => {
    const wrapper = setup();
    //const draggableNarrative = findByTestAttr(wrapper,'draggable-narrative');
    //expect(draggableNarrative.at(0).prop("position")).toEqual({ x: 0, y: 0 });
    //console.log(draggableNarrative);
   //draggableNarrative.simulate('onMouseUp');
  //  draggableNarrative.simlute('onMouseDown');

    //expect(draggableNarrative.at(1).prop("position")).not.toEqual({ x: 0, y: 0 });
  });

});
