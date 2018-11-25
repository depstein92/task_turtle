import React from 'react';
import { withRouter } from 'react-router-dom'
import defaultImages from '../DefaultImages';
import { StyleSheet, css } from "aphrodite";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import actions from '../actions/index';
import { Icon, Button } from 'semantic-ui-react';


class Preview extends React.Component{

  constructor(props){
    super(props);
    this.state = { imgIndex: 0 }
    this.renderImages = this.renderImages.bind(this);
    this.incrementSlider = this.incrementSlider.bind(this);
    this.decrementSlider = this.decrementSlider.bind(this);
    this.sendImageActionToEditor = this.sendImageActionToEditor.bind(this);
  }

  sendImageActionToEditor(img, title){
    let { addImageToEditor } = this.props;
    addImageToEditor(img, title);
  }

  renderImages(){
    let { imgIndex } = this.state,
        { handleIsDataLoaded } = this.props,
        imagesArr = new Array();

    for(var i = 0; i < 3; i++){

      const imageTitle = defaultImages[imgIndex + i].title,
            imageUrl = defaultImages[imgIndex + i].image_url;

      const ReRouteLink = withRouter(({ history}) => (
            <img
             className={css(styles.preview_img_img)}
             onClick={() => {
               this.sendImageActionToEditor(imageUrl, imageTitle);
               this.handleIsDataLoaded();
               history.push('/Editor');
             }}
             src={ imageUrl } />
      ))

      imagesArr.push(
         <div className={css(styles.preview_img)} key={imgIndex + i}>
           <ReRouteLink />
          <div className={css(styles.preview_img_title)}>
           { imageTitle }
          </div>
         </div>)
     }
     return imagesArr;
  };


  incrementSlider(){
    let { imgIndex } = this.state;
    /*due to there being three images*/
    if(imgIndex === defaultImages.length - 3){
      this.setState({ imgIndex: 0 })
    } else {
      this.setState({ imgIndex: imgIndex + 1 })
    }
  }


  decrementSlider(){
    let { imgIndex } = this.state;
    if(imgIndex === 0){
      return null;
    } else {
      this.setState({ imgIndex: imgIndex - 1 })
    }
  }


  render(){
    return(
      <div className={css(styles.preview_container)}>
      <Button
        onClick={() => { this.incrementSlider() }}
        className={css(styles.preview_inc_button)}>
        <Icon name='right arrow' />
      </Button>
        {this.renderImages()}
        <Button
         onClick={() => { this.decrementSlider() }}
         className={css(styles.preview_dec_button)}>
         <Icon name='left arrow' />
        </Button>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  preview_container: {
    width: "80%",
    height: "30vh",
    display: "flex",
    flexDirection: "row",
    margin: "0 auto",
    position: "relative",
    justifyContent: "space-evenly",
    border: 'none'
  },
  preview_inc_button: {
    position: "absolute",
    right: "0",
    height: "100%",
    width: "5%"
  },
  preview_img_title: {
    position: "absolute",
    bottom: "0"
  },
  preview_dec_button: {
    position: "absolute",
    height: "100%",
    left: "0",
    width: "5%"
  },
  preview_img: {
    border: "1px solid",
    width: "20%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column-reverse",
    alignItems: "center"

  },

  preview_img_img: {
    position: "absolute",
    width: "15%",
    maxWidth: "25%",
    height: "50%",
    top: "25%",
    cursor: "pointer"
  }
});

 const mapDispatchToProps = (dispatch) => {
   let { addImageToEditor } = actions;
   return bindActionCreators({ addImageToEditor }, dispatch)
 };

export default connect(null, mapDispatchToProps)(Preview);
