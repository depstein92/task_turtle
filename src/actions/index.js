const addImageToEditor = (image, title) => {
  return {
    type: 'ADD_PHOTO_SUCCESS',
    payload: { image, title }
  }
};

const addFormField = (num) =>{
  return {
    type: 'ADD_FORM_FIELD_SUCCESS',
    payload: num
  }
}

export default { /*unecc*/
  addImageToEditor: addImageToEditor,
  addFormField: addFormField
};
