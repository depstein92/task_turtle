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
      addImageForm: 1,
      numOfDialogueBox: [],
      activeColorIndex: [],
      activeFontIndex: [],
      blackColorFontType: [],
      whiteColorFontType: [],
      upperCaseFontType: [],
      lowerCaseFontType: [],
      italicFontType: [],
      mockingFontType: []
    }
  }

  onSubmitSetState = () => {

   let {
    blackColorFontType,
    whiteColorFontType,
    upperCaseFontType,
    lowerCaseFontType,
    italicFontType,
    mockingFontType
   } = this.state;

   let { addImageToEditor: { data: { image, title} },
         addImageToFeed,
         narrativeBoxContent: { image_editor }
       } = this.props;

   let fontProperties = {},
       fontTypes = '',
       narrative = null,
       img = image ? image : null,
       stateKeys = Object.keys(this.state),
       stateValues = Object.values(this.state);

   for(let i = 0; i < stateKeys.length; i++){
     if(stateKeys[i].includes('FontType')) {
       if(stateKeys[i].values){
         if(stateValues[i].values.length === 1){
            fontTypes += stateValues[i].values[1]
         } else {
            let fonts = stateValues[i].values
                        .reduce((a, b) => a + b);
            fontTypes += fonts;
         }
       }
     };
   };

   if(image_editor.values){
    if(Object.values(image_editor.values).length === 1){
        narrative = image_editor.values.form0;
    } else{
        narrative = Object.values(image_editor.values)
                          .reduce((a, b) => a + b);
    }
   }
   addImageToFeed();
  }


  onAddImageForm = () => {
    let { addImageForm } = this.state,
        { addFormField } = this.props;

    this.setState({ addImageForm: addImageForm + 1 });
  }


  openColorMenuClick = (e) => {
    let index = parseInt(e.target.dataset.key),
        { activeColorIndex } = this.state;

    this.setState({ activeColorIndex: [...activeColorIndex, index ]  });
  }

  closeColorMenuClick = (e) => {
    let index = parseInt(e.target.dataset.key),
        { activeColorIndex } = this.state;

    this.setState({ activeColorIndex: activeColorIndex.splice(1, index) });
  }

  getColorType = (e) => {
   let {
     blackColorFontType,
     whiteColorFontType
   } = this.state,
   index = parseInt(e.target.parentNode.dataset.value);

   this.setState({
     blackColorFontType: blackColorFontType.includes(index) ?
                         blackColorFontType.splice(1, index ) :
                         blackColorFontType,
     whiteColorFontType: whiteColorFontType.includes(index) ?
                         whiteColorFontType.splice(1, index) :
                         whiteColorFontType
   });

   if(e.target.innerHTML === 'White'){
     this.setState({
       whiteColorFontType: [...whiteColorFontType, index ]
     });
   } else{
     this.setState({
       blackColorFontType: [...blackColorFontType, index ]
     });
   }

 }

 setColorType = (index, str) => {
   let { whiteColorFontType, blackColorFontType } = this.state;

   if(whiteColorFontType.includes(index)){
      return <div style={{ color: 'white' }}>{ str }</div>;
   } else{
      return str;
   }
 }

  renderColorMenu = () => {
    let { addImageForm, activeColorIndex } = this.state,
          colorMenus = new Array();

    for(let i = 0; i < addImageForm; i++){
      colorMenus.push(
        activeColorIndex.includes(i) ?
        (<Form.Group
         className={css(styles.fontMenu)}
         key={`${i}`} grouped>
          <Form.Radio label='Exit' onClick={this.closeColorMenuClick}  />
          <Form.Radio
            label='White'
            name='White'
            type='radio'
            key={'${i}'}
            value={'white'}
            data-value={`${i}`}
            onClick={ this.getColorType }
            />
          <Form.Radio
            label='Black'
            name='Black'
            type='radio'
            value='Black'
            data-value={`${i}`}
            onClick={ this.getColorType }
            />
        </Form.Group>
      ) :
      <div
       data-key={i} className={css(styles.change_font_color_button)} onClick={this.openColorMenuClick}>
        Change Font Color for Narrative {`${i + 1}`}
      </div>);
    }
    return colorMenus;
  }

  getFontType = (e) => {
    let {
      upperCaseFontType,
      lowerCaseFontType,
      italicFontType,
      mockingFontType
        } = this.state,
    index = parseInt(e.target.parentNode.dataset.value);

    this.setState({
       upperCaseFontType: upperCaseFontType.includes(index) ?
                          upperCaseFontType.splice(1, index) :
                          upperCaseFontType,
       lowerCaseFontType: lowerCaseFontType.includes(index) ?
                          lowerCaseFontType.splice(1, index) :
                          lowerCaseFontType,
       italicFontType:    italicFontType.includes(index) ?
                          italicFontType.splice(1, index) :
                          italicFontType,
       mockingCase:       mockingFontType.includes(index) ?
                          mockingFontType.splice(1, index) :
                          mockingFontType
    });

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

    if(upperCaseFontType.includes(index)){
       return string.toUpperCase();
    } else if(lowerCaseFontType.includes(index)){
       return string.toLowerCase();
    } else if(mockingFontType.includes(index)){
       return string.split('').map((obj, index) => {
                return index % 2 === 0 ? obj : obj.toUpperCase()
             }).join('');
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
         <div
          data-key={i}
          className={css(styles.change_font_type_button)}
          onClick={this.openFontMenuClick}>
          Change Font Type for Narrative {`${i + 1}`}
         </div>);
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

  renderDialogueBox = () => {
   const {
    narrativeBoxContent: {image_editor}
   } = this.props;
   const { numOfDialogueBox } = this.state;

   if(image_editor !== undefined){
    if(image_editor.hasOwnProperty('values')){
       return Object.keys(image_editor.values).map((obj, index) => {

         const fontTypeOfStr = this.setFontType(index, image_editor.values[obj]),
               finalStringEdit = this.setColorType(index, fontTypeOfStr);

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
          key={index}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}>
          <div style={{ borderStyle: 'solid'}}>
            <div
             style={{
               textAlign: 'center',
             }}
             className="handle">
             { finalStringEdit }
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
    console.log(this.props);
    return(
      <div className={css(styles.editor_container)} data-test='Editor'>
       <Container fluid>
        { this.ifImageIsNull() }
       </Container>
       <button onClick={()=>{ this.onAddImageForm() }}>
       Add Image Narrative
       </button>
       <ImageEditorForm
        imageForms={this.state.addImageForm}
        renderTextMenu={this.renderTextMenu}
        renderColorMenu={this.renderColorMenu}
        onSubmit={this.onSubmitSetState}
        removeNarrativeByNum={this.removeNarrativeByNum} />
       <div className={css(styles.narrativeDiv)}>
       <div className={css(styles.narrative_container_title)}>
        Drag and Drop
       </div>
       <div className={css(styles.narrative_container)}>
        {this.renderDialogueBox()}
       </div>
       <div className={css(styles.change_font_type_container)}>
        {this.renderTextMenu()}
       </div>
       <div className={css(styles.change_font_color_container)}>
        {this.renderColorMenu()}
       </div>
       </div>
      </div>
    )
  }
}


Editor.propTypes = {

};


const styles = StyleSheet.create({
  imageNotSelected: {
    textAlign: 'center',
    borderTop: 'solid'
  },
  editor_container: {
    marginTop: '20vh',
  },
  change_font_type_container: {
   border: 'solid black',
   width: '50%'
  },
  change_font_color_container: {
   border: 'solid black',
   width: '50%'
  },
  change_font_type_button: {
    ':hover': {
      cursor: 'pointer',
      backgroundColor: 'blue',
      color: 'white'
    },
    textAlign: 'center',
    margin: '5%'
  },
  change_font_color_button: {
    ':hover': {
      cursor: 'pointer',
      backgroundColor: 'blue',
      color: 'white'
    },
    textAlign: 'center',
    margin: '5%'
  },
  fontMenu: {
   backgroundColor: 'blue'
  },
  imageTitle: {
  },
  centeredContainer: {
  },
  narrativeDiv: {
   display: 'flex',
   justifyContent: 'space-evenly',
   height: '100%',
   flexDirection: 'row'
 },
 narrative_container_title: {
   position: 'absolute',
   width: '15%',
   right: '0',
   backgroundColor: 'blue',
   textAlign: 'center',
   bottom: '27%',
   padding: '1%'
 },
 narrative_container:{
   bottom: '-23%',
   position: 'absolute',
   border: 'solid',
   backgroundColor: 'red',
   display: 'flex',
   justifyContent: 'space-evenly',
   flexDirection: 'column',
   width: '15%',
   height: '50%',
   alignItems: 'center',
   right: '0'
 },
 draggable: {
   backgroundColor: 'blue',
   ':hover': {
     cursor: 'pointer',
     backgroundColor: 'blue'
   }
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
