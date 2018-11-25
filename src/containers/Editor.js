import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyleSheet, css } from 'aphrodite';
import ImageEditorForm from './Forms';
import { addFormField } from '../actions/index';
import { Container, Image, Form, Icon } from 'semantic-ui-react';
import { getFormValues } from 'redux-form';
import Draggable from 'react-draggable';


class Editor extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      addImageForm: 1,
      numOfDialogueBox: [],
      activeFontIndex: [],
      upperCaseFontType: [],
      lowerCaseFontType: [],
      italicFontType: [],
      mockingFontType: []
    }
    this.onAddImageForm = this.onAddImageForm.bind(this);
    this.ifImageIsNull = this.ifImageIsNull.bind(this);
    this.renderDialogueBox = this.renderDialogueBox.bind(this);
    this.removeNarrativeByNum =   this.removeNarrativeByNum.bind(this);
    this.renderTextMenu = this.renderTextMenu.bind(this);
    this.openFontMenuClick = this.openFontMenuClick.bind(this);
    this.closeFontMenuClick = this.closeFontMenuClick.bind(this);
    this.setFontType = this.setFontType.bind(this);
    this.getFontType = this.getFontType.bind(this);
  }

  onAddImageForm = () => {
    let { addImageForm } = this.state,
        { addFormField } = this.props;

    this.setState({ addImageForm: addImageForm + 1 });
  }

  getFontType = (e) => {
    let {
      upperCaseFontType,
      lowerCaseFontType,
      italicFontType,
      mockingFontType
        } = this.state,
    index = parseInt(e.target.parentNode.dataset.value);
    debugger;
    console.log('target', index);
    if(e.target.innerHTML === 'Upper Case'){
      this.setState({ upperCaseFontType: [...upperCaseFontType, index]});
    } else if(e.target.innerHTML === 'Lower Case'){
      this.setState({ lowerCaseFontType: [...lowerCaseFontType, index]});
    } else if(e.target.innerHTML === 'Italic'){
      this.setState({ italicFontType: [...italicFontType, index]});
    } else if(e.target.innerHTML === 'Mocking Case'){
      this.setState({ mockingFontType: [...mockingFontType, index]});
    } else{
      return null;
    }
  }

  setFontType = (index, string) => {
    let {
      upperCaseFontType,
      lowerCaseFontType,
      italicFontType,
      mockingFontType
    } = this.state;
    console.log(upperCaseFontType);
    if(upperCaseFontType.includes(index)){
      return string.toUpperCase();
    } else if(lowerCaseFontType.includes(index)){
      return string.toLowerCase();
    } else if(mockingFontType.includes(index)){
    //  return mockingCase(string);
    } else if(italicFontType.includes(index)){
      return string.italics();
    } else {
      return string;
    }
  }

  openFontMenuClick = (e) => {
    let index = parseInt(e.target.dataset.key),
        { activeFontIndex } = this.state;

    this.setState({ activeFontIndex: activeFontIndex.concat(...[index]) });
  }

  closeFontMenuClick = (e) => {
   let index = parseInt(e.target.dataset.key),
       { activeFontIndex } = this.state;

   this.setState({ activeFontIndex: activeFontIndex.splice(1, index) });
  }

  renderTextMenu = () => {
    let { activeFontIndex, addImageForm } = this.state,
        textMenus = new Array();

    for(let i = 0 ; i < addImageForm; i++){
      textMenus.push(
        activeFontIndex.includes(i) ?
         ( <Form.Group
            className={css(styles.fontMenu)}
            key={`${i}`} grouped>
             <Form.Radio label='Exit' onClick={this.closeFontMenuClick}  />
             <Form.Radio
               label='Upper Case'
               name='font type'
               type='radio'
               key={'${i}'}
               value={'upper-case'}
               data-value={`${i}`}
               onClick={ this.getFontType }
               />
             <Form.Radio
               label='Mocking Case'
               name='font type'
               type='radio'
               value='mocking-case'
               data-value={`${i}`}
               onClick={ this.getFontType }
               />
             <Form.Radio
               label='Lower Case'
               name='font type'
               type='radio'
               value='lower-case'
               data-value={`${i}`}
               onClick={ this.getFontType }
               />
             <Form.Radio
               label='Italic'
               name='font type'
               type='radio'
               value='italic'
               data-value={`${i}`}
               onClick={ this.getFontType }
               />
           </Form.Group>
         ) :
         <div data-key={i} onClick={this.openFontMenuClick}>Change Font </div>);
     }

     return textMenus
  }

  removeNarrativeByNum = (num) => {
    let { numOfDialogueBox } = this.state;
    this.setState({ numOfDialogueBox: numOfDialogueBox.concat(...[num]) });
  }

  ifImageIsNull = () => {
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

         const fontTypeOfStr = this.setFontType(index, image_editor.values[obj]);
        console.log(fontTypeOfStr);

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
            <div
             style={{
               textAlign: 'center',
             }}
             className="handle">
             { fontTypeOfStr  }
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
