import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import * as Aphrodite from 'aphrodite';
import * as AphroditeNoImportant from 'aphrodite/no-important';
import configureStore from 'redux-mock-store';
import ReduxPromise from 'redux-promise';
import Editor from '../../src/containers/Editor';
import { setup, findByTestAttr } from '../../test_helpers/index';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const middlewares = [ReduxPromise], //mocking redux store
      mockStore = configureStore(middlewares);

const initialState = {  }, //redux store initial state
      store = mockStore(initialState),
      wrapper = mount(<Editor store={store} />);




describe('Editor runs without error', () => {

  test('Editor renders without error', () => {
    //const Editor = findByTestAttr(wrapper, 'Editor');
    const previewContainer = findByTestAttr(wrapper, 'preview-image');

    const previewContainerProps = {
      addImageToEditor: {},
      narrativeBoxContent: {},
      addImageToFeed: () => {}
    };

    const previewContainerPropsData = {
      image: 'no Image Selected',
      title: 'no title selected'
    };

    expect(Editor).not.toBeUndefined();
    expect(Editor.length).toEqual(2);

    expect(previewContainer.length).not.toBe(0);
    expect(previewContainer).not.toBeUndefined();

    expect(previewContainer.props().addImageToEditor).objectContaining(previewContainerPropsData);

    //expect(wrapper.prop('')).to.equal('Success!');
  });

});

// describe('draggable narrative object in Editor renders', () => {
//
//   test('narrative content shows', () => {
//     const wrapper = setup();
//     const draggableNarrative = findByTestAttr(wrapper,'draggable-narrative');
//     const addImageButton = findByTestAttr(wrapper, 'add-image-button');
// //
// //     // expect(draggableNarrative).not.toBeUndefined();
// //   //  expect(draggableNarrative.length).toEqual(0);
// // //    expect(draggableNarrative.toExist());
//    });
// });
