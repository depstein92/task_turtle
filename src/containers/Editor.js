import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyleSheet, css } from 'aphrodite';
import ImageEditorForm from './Forms';
import { addFormField } from '../actions/index';
import { Container, Image } from 'semantic-ui-react';
import { getFormValues } from 'redux-form';


class Editor extends React.Component{
  constructor(props){
    super(props)

    this.state = { addImageForm: 1, numOfDialogueBox: 1 }
    this.onAddImageForm = this.onAddImageForm.bind(this);
    this.ifImageIsNull = this.ifImageIsNull.bind(this);
    this.renderDialogueBox = this.renderDialogueBox.bind(this);
  }

  onAddImageForm(){
   let { addImageForm } = this.state;
   let { addFormField } = this.props;
   this.setState({ addImageForm: addImageForm + 1 });
  }

  ifImageIsNull(){
   const { addImageToEditor: data } = this.props;

   if(Object.keys(data.data).length === 0){
    return (
       <div className={css(styles.imageNotSelected)}>
          Image Not Selected
       </div>
     )
   } else{
    return(
      <div>
       <Image src={data.data.image} size="large" centered />
       <div className={styles.imageTitle}>{ data.data.title }</div>
      </div>
    )
   }
  }

  renderDialogueBox(){
    let {
      narrativeBoxContent: {
          image_editor
        }
     } = this.props;
     
   if(image_editor !== undefined){
    if(image_editor.hasOwnProperty('values')){
       return Object.keys(image_editor.values).map(obj => {
          return <div>{ image_editor.values[obj] }</div>
     })
    }
  }
}


  render(){

    return(
      <div>
       <Container fluid>
        { this.ifImageIsNull() }
       </Container>
       <button onClick={()=>{ this.onAddImageForm() }}>Add Image Form</button>
       <ImageEditorForm imageForms={this.state.addImageForm} />
       { this.renderDialogueBox() }
      </div>
    )
  }
}

const styles = StyleSheet.create({
  imageNotSelected: {
    fontSize: "11vw",
    textAlign: "center"
  },
  imageTitle: {
    textAlign: 'center',
  }
});


const mapStateToProps = (state) => {
  return {
    addImageToEditor: state.addImageReducer,
    narrativeBoxContent: state.form
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addFormField }, dispatch)
}

export default connect(mapStateToProps,  mapDispatchToProps)(Editor);
