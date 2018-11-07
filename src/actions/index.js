const addImageToEditor = (image, title) => {
  return {
    type: 'ADD_PHOTO_SUCCESS',
    payload: { image, title }
  }
};

export default {
  addImageToEditor
};
