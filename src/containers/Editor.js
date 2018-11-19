import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyleSheet, css } from 'aphrodite';
import ImageEditorForm from './Forms';
import { addFormField } from '../actions/index';
import { Container, Image } from 'semantic-ui-react';
import { getFormValues } from 'redux-form';
import Draggable from 'react-draggable';


class Editor extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      addImageForm: 1,
      numOfDialogueBox: []
    }
    this.onAddImageForm = this.onAddImageForm.bind(this);
    this.ifImageIsNull = this.ifImageIsNull.bind(this);
    this.renderDialogueBox = this.renderDialogueBox.bind(this);
    this.removeNarrativeByNum =   this.removeNarrativeByNum.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onAddImageForm(){
   let { addImageForm } = this.state;
   let { addFormField } = this.props;
   this.setState({ addImageForm: addImageForm + 1 });
  }

  removeNarrativeByNum(num){
    let { numOfDialogueBox } = this.state;
    this.setState({ numOfDialogueBox: numOfDialogueBox.concat(...[num]) });
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
   const {
    narrativeBoxContent: {image_editor}
   } = this.props;
   const { numOfDialogueBox } = this.state;

   if(image_editor !== undefined){
    if(image_editor.hasOwnProperty('values')){
       return Object.keys(image_editor.values).map((obj, index) => {
         if(numOfDialogueBox.includes(index)){
           return null;
         } else{
          return(
       <Draggable
          bounds={{left: '100vw', top: '100vh', right: '100vw', bottom: '100vh'}}
          handle=".handle"
          className={css(styles.draggable)}
          defaultPosition={{x: 0, y: 0}}
          position={null}
          grid={[25, 25]}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}>
          <div style={{ borderStyle: 'solid'}}>
            <div style={{textAlign: 'center'}} className="handle">
             { image_editor.values[obj] }
            </div>
          </div>
        </Draggable>
        )
      }
     })
    }
  }
}

onFormSubmit(values){

}


  render(){
    
    return(
      <div>
       <Container fluid>
        { this.ifImageIsNull() }
       </Container>
       <button onClick={()=>{ this.onAddImageForm() }}>Add Image Form</button>
       <ImageEditorForm
        imageForms={this.state.addImageForm}
        onSubmit={this.onFormSubmit}
        removeNarrativeByNum={this.removeNarrativeByNum} />
       <div className={css(styles.narrativeDiv)}>
       { this.renderDialogueBox() }
       </div>
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
  },
  centeredContainer: {
   width: '100%'
  },
  narrativeDiv: {
   color: 'black',
   height: '15vh',
   border: 'solid',
   width: '40%',
   display: 'flex',
   justifyContent: 'space-evenly',
   flexDirection: 'column',
   position: 'absolute',
   top: '10%'
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
