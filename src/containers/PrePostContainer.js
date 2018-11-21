import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { Image } from'semantic-ui-react';


class PrePostContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      editorInfo: [{ values: 'editor info not avalible' }]
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

    this.setState({ editorInfo: editorInfo.concat(...[image_editor]) })
  }

  renderEditorInfo(){
    let { editorInfo } = this.state,
        { addImageToEditor: data } = this.props,

        image = Object.keys(data).length === 0 ?
                <div></div> :
                <Image src={data.data.image} size="large" centered />,

        narrative = editorInfo[1] === undefined ?
                    <div>{ editorInfo[0].values }</div> :
                    Object.values(editorInfo[1].values)
                          .map((obj, index) => {
                            return <div key={index}>{obj}</div>
                          });
    return(
      <div>
        { image }
        { narrative }
      </div>
    )
  }

  render(){
    console.log(this.props.addImageToEditor)
    return(
      <div className={css(styles.prepost_container)}>
       {this.renderEditorInfo() }
      </div>
    )
  }
}

const styles = StyleSheet.create({
  prepost_container: {
    backgroundColor: 'aliceblue',
    textAlign: 'center',
    height: '70vh'
  }
})

const mapStateToProps = (state) => {
  return {
    formData: state.form,
    addImageToEditor: state.addImageReducer,
  }
}

export default connect(mapStateToProps)(PrePostContainer);
