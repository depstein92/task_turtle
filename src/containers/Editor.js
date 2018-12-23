import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyleSheet, css } from 'aphrodite';
import ImageEditorForm from './Forms';
import { addFormField } from '../actions/index';
import actions from '../actions/index';
import { Container, Image, Form, Icon } from 'semantic-ui-react';
import { getFormValues } from 'redux-form';
import Draggable from 'react-draggable';
import PropTypes from 'prop-types';


class Editor extends React.Component{
  constructor(props){
    super(props)

    this.state = {

    }
  }

 addPreviewDataToEditor = () => {

   const { data } = this.props.addImageToEditor;
   const ifImageIsSelected = data.image.length === 0 ?
                             '../style/images/default_image.png' :
                             data.image;

   return Object.values(data).map((obj, index) => {
    return(
    <div
     key={index}
     data-test="preview-image">
      <Image
       className={css(styles.narrative_image)}
       src={ifImageIsSelected} fluid />
      <div className={css(styles.narrative_container_title)}>
          { obj.title } Image Title
      </div>
     </div>
   )
 })[0];
 }

    render(){
      console.log(this.props);
      return(
        <div
         data-test="Editor"
         className={css(styles.editor_container)}>
        { this.addPreviewDataToEditor() }
        </div>
      )
    }
  }

  Editor.PropTypes = {
    addImageToEditor: PropTypes.shape({
      data: PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string
      })
    })
  };


const styles = StyleSheet.create({
  imageNotSelected: {
    textAlign: 'center',
    borderTop: 'solid'
  },
  editor_container: {
    borderStyle: 'solid',
    backgroundColor: 'aqua',
    height: '100vh',
    position:'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'normal'
  },
  narrative_container_title: {
    backgroundColor: 'red',
    height: '5vh',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  narrative_image: {
    maxHeight: '40vh',
    maxWidth: '100%',
    width: '50vw',
    height: '40vh',
    marginTop: '10%'
  }
});


const mapStateToProps = (state) => {
  return {
    addImageToEditor: state.addImageReducer,
    narrativeBoxContent: state.form
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addFormField, addImageToFeed: actions['addImageToFeed']}, dispatch)
}

export default connect(mapStateToProps,  mapDispatchToProps)(Editor);
