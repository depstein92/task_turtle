import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';

let ImageEditorForm = props => {

  const { handleSubmit, imageForms } = props;

  let formField = () => {

    let formArr = new Array();

    for(let i = 0; i < imageForms; i++){
      formArr.push(
        <div className={css(styles.editImageForm)}>
          <label htmlFor="Image_Narrative">Image Narrative</label>
          <Field name={`form${i}`} component="input" type="text" />
        </div>
      )
     }
     return formArr;
  }

  return (
    <form onSubmit={handleSubmit} className={css(styles.ImageEditorForm)}>
      { formField() }
      <button type="submit">Submit</button>
    </form>
  )
}

const styles = StyleSheet.create({
  ImageEditorForm: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    backgroundColor: 'red',
    height: '15vh',
    alignItems: 'center',
    flexDirection: 'column'
  },
  editImageForm: {
   marginBottom: "40px"
  },
  narrativeBoxCenter: {

  }
});

ImageEditorForm = reduxForm({
  form: 'image_editor'
})(ImageEditorForm)


export default ImageEditorForm;
