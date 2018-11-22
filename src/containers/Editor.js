import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyleSheet, css } from 'aphrodite';
import ImageEditorForm from './Forms';
import { addFormField } from '../actions/index';
import { Container, Image, Form } from 'semantic-ui-react';
import { getFormValues } from 'redux-form';
import Draggable from 'react-draggable';


class Editor extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      addImageForm: 1,
      numOfDialogueBox: [],
      fontStyle: 'normal',
      activeFontIndex: false
    }
    this.onAddImageForm = this.onAddImageForm.bind(this);
    this.ifImageIsNull = this.ifImageIsNull.bind(this);
    this.renderDialogueBox = this.renderDialogueBox.bind(this);
    this.removeNarrativeByNum =   this.removeNarrativeByNum.bind(this);
    this.renderTextMenu = this.renderTextMenu.bind(this);
    this.changeFontObject = this.changeFontObject.bind(this);
    this.openFontMenuClick = this.openFontMenuClick.bind(this);
    this.closeFontMenuClick = this.closeFontMenuClick.bind(this);
  }

  onAddImageForm(){
   let { addImageForm } = this.state;
   let { addFormField } = this.props;
   this.setState({ addImageForm: addImageForm + 1 });
  }

  openFontMenuClick = () => {
   let { activeFontIndex } = this.state;
   this.setState({ activeFontIndex: true });
  }

  closeFontMenuClick = () => {
    let { activeFontIndex } = this.state;
    this.setState({ activeFontIndex: false });
  }

  changeFontObject = () => {
    return {


    }
  }


  renderTextMenu(){
    let { activeFontIndex, addImageForm } = this.state,
        textMenus = new Array();

    for(let i = 0 ; i < addImageForm; i++){
       textMenus.push(activeFontIndex ?
         ( <Form.Group
            className={css(styles.fontMenu)}
            onClick={this.closeFontMenuClick} 
            key={`${i}`} grouped>
             <Form.Radio label='Small' name='size' type='radio' value='small' />
             <Form.Radio label='Medium' name='size' type='radio' value='medium' />
             <Form.Radio label='Large' name='size' type='radio' value='large' />
             <Form.Radio label='X-Large' name='size' type='radio' value='x-large' />
           </Form.Group>
         ) : <div onClick={this.openFontMenuClick}>Change Font </div>);
     }
     console.log(textMenus);
     return textMenus

  }

  removeNarrativeByNum(num){
    let { numOfDialogueBox } = this.state;
    this.setState({ numOfDialogueBox: numOfDialogueBox.concat(...[num]) });
  }

  ifImageIsNull(){
   const { addImageToEditor: data } = this.props;

   if(Object.keys(data.data).length === 0){
    return (
      <Image className={css(styles.imageNotAvail)}
             src='https://react.semantic-ui.com/images/wireframe/square-image.png'
             size='large' centered bordered />
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

  render(){
    return(
      <div className={css(styles.editor_container)}>
       <Container fluid>
        { this.ifImageIsNull() }
       </Container>
       <button onClick={()=>{ this.onAddImageForm() }}>
       Add Image Narrative
       </button>
       <ImageEditorForm
        imageForms={this.state.addImageForm}
        onSubmit={this.onFormSubmit}
        removeNarrativeByNum={this.removeNarrativeByNum} />
       <div className={css(styles.narrativeDiv)}>
       { this.renderDialogueBox() }
       { this.renderTextMenu()    }
       </div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  imageNotSelected: {
    textAlign: 'center',

  },
  editor_container: {
    marginTop: '20vh',
    border: 'solid'
  },
  fontMenu: {
   backgroundColor: 'blue'
  },
  imageTitle: {
  },
  centeredContainer: {
  },
  narrativeDiv: {
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
