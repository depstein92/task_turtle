import React from 'react';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { setup, findByTestAttr } from '../../test_helpers/index';
import Editor from '../../src/containers/Editor';

Enzyme.configure({ adapter: new EnzymeAdapter() });


describe('Editor runs without error', () => {

  test('Editor renders without error', () => {
    const wrapper = setup();
    const Editor = findByTestAttr(wrapper, 'Editor');
    expect(Editor).not.toBeUndefined();
    expect(Editor.length).toBeGreaterThan(1);
  });

});

describe('draggable narrative object in Editor renders', () => {

  test('narrative content shows', () => {
    const wrapper = setup();
    const draggableNarrative = findByTestAttr(wrapper,'draggable-narrative');
    expect(draggableNarrative).toBeUndefined();
    expect(draggableNarrative.text()).toBe('');

    draggableNarrative.simulate('keyPress'); //Could Fail

    expect(draggableNarrative.text().length).not.toBe(0);
  });

  test('narrative content to be draggable', () => {
    const wrapper = setup();
    const draggableNarrative = findByTestAttr(wrapper,'draggable-narrative');
    expect(draggableNarrative.state().dragging).toBe(false);
    expect(draggableNarrative.at(1).prop("position")).toEqual({ x: 0, y: 0 });

    draggableNarrative.simulate('onMouseUp');
    draggableNarrative.simlute('onMouseDown');

    expect(draggableNarrative.state().dragging).toBe(true);
    expect(draggableNarrative.at(1).prop("position")).not.toEqual({ x: 0, y: 0 });
  });



});
