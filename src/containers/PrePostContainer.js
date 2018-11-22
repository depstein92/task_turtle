import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { Image } from'semantic-ui-react';
import { initialize } from 'redux-form';
import Draggable from 'react-draggable';


class PrePostContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      editorInfo: { dataUnavailable: 'editor info not available', values: '' }
    }
    this.renderEditorInfo = this.renderEditorInfo.bind(this);
  }

  componentDidMount(){
    let {
      formData: {
       image_editor
      }
    } = this.props,
    { editorInfo } = this.state;

    this.setState({ editorInfo: Object.assign({}, editorInfo, image_editor) })
  }

  renderEditorInfo(){
    let { editorInfo } = this.state,
        { addImageToEditor: data } = this.props,

        image = Object.keys(data.data).length === 0 ?
                <Image className={css(styles.imageNotAvail)}
                       src='https://react.semantic-ui.com/images/wireframe/square-image.png'
                       size='large' centered bordered /> :
                <Image src={data.data.image} size="large" centered />,

        narrative = editorInfo.values === '' ?
                    <div className={css(styles.narrative)}>
                      { editorInfo.dataUnavailable }
                    </div> :
                    Object.values(editorInfo.values)
                          .map((obj, index) => {
                            return(
                              <Draggable
                                 handle=".handle"
                                 defaultPosition={{x: 0, y: 0}}
                                 position={null}
                                 grid={[25, 25]}
                                 onStart={this.handleStart}
                                 onDrag={this.handleDrag}
                                 key={index}
                                 onStop={this.handleStop}>
                                 <div className={css(styles.narrative)}>{obj}</div>
                              </Draggable>
                            )
                          });

    return(
      <div>
    { image }
  { narrative }
      </div>
    )
  }

  render(){
    return(
      <div className={css(styles.prepost_container)}>
       {this.renderEditorInfo() }
       <button className={css(styles.submitButton)}>
       Submit To Feed
       </button>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  prepost_container: {
    backgroundColor: 'aliceblue',
    textAlign: 'center',
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },
  narrative: {
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    fontSize: '2vh',
    backgroundColor: 'grey',
    padding: '1%',
    width: '50%',
    maxWidth: '50%',
    margin: '0 auto',
    marginLeft: '25%',
    marginTop: '3%'
  },
  submitButton: {
    marginTop: '5%',
    ':hover': {
      cursor: 'pointer'
    },
    maxWidth: '150px',
    margin: '0 auto',
    padding: '1%'
  }
})

const mapStateToProps = (state) => {
  return {
    formData: state.form,
    addImageToEditor: state.addImageReducer ? state.addImageReducer : { data: 'no data' }
  }
}

export default connect(mapStateToProps)(PrePostContainer);
