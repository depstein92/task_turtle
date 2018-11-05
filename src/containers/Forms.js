
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
        <div>
          <label htmlFor="Image_Narrative">Image Narrative</label>
          <Field name="firstName" component="input" type="text" />
        </div>
      )
     }
     return formArr
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
  }
});

ImageEditorForm = reduxForm({
  form: 'contact'
})(ImageEditorForm)


export default ImageEditorForm;
