import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyleSheet, css } from 'aphrodite';
import ImageEditorForm from './Forms';
import { addFormField } from '../actions/index';


class Editor extends React.Component{
  constructor(props){
    super(props)

    this.state = { addImageForm: 1 }
    this.onAddImageForm = this.onAddImageForm.bind(this);
  }

  onAddImageForm(){
   let { addImageForm } = this.state;
   let { addFormField } = this.props;
   this.setState({ addImageForm: addImageForm + 1 });
  }

  render(){
    return(
      <div>
       <button onClick={()=>{ this.onAddImageForm() }}>Add Image Form</button>
       <ImageEditorForm imageForms={this.state.addImageForm}  />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    addImageToEditor: state.addImageReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addFormField }, dispatch)
}

export default connect(mapStateToProps,  mapDispatchToProps)(Editor);
