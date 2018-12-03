import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { addImageToFeed } from '../actions/index';


let ImageEditorForm = props => {

  const { imageForms, handleSubmit } = props,
        formArr = new Array();

  const formField = () => {

   const {
    removeNarrativeByNum,
    handleSubmit,
    addImageToFeed
   } = props;

  const removeNarr = (e) => {
    const narrBox = e.target.parentElement.parentNode.style;

    narrBox.visibility = 'hidden';
    narrBox.position = "absolute";
    narrBox.top = "0px";
    removeNarrativeByNum(parseInt(e.target.dataset.tag));
   }


   for(let i = 0; i < imageForms; i++){
      formArr.push(
        <div className={css(styles.ImageEditorForm_child)}>
          <label htmlFor="Image_Narrative">Image Narrative</label>
          <Field name={`form${i}`} component="input" type="text" />
          <span className={css(styles.close_button)}>
          <Icon
            data-tag={i}
            name="times circle"
            onClick={(e) => removeNarr(e) }
            />
          </span>
        </div>
      )
     }
     return formArr;
  }

  return (
    <form
     className={css(styles.ImageEditorForm)}>
      { formField() }
      <button
       type="submit"
       handleSubmit={props.handleSubmit}
       className={css(styles.formButton) }>
       Hello
      </button>
    </form>
  )
}

const styles = StyleSheet.create({
  ImageEditorForm: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-evenly',
    backgroundColor: 'red',
    height: '15vh',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  ImageEditorForm_child: {
   minWidth: "33%",
   ':hover': {
     cursor: 'pointer'
   }
  },
  formButton: {
    ':hover': {
      cursor: 'pointer'
    }
  },
  close_button: {
    marginLeft: '2%',
    ':hover': {
      cursor: 'pointer'
    }
  }
});


ImageEditorForm = reduxForm({
  form: 'image_editor'
})(ImageEditorForm)


export default connect()(ImageEditorForm);
