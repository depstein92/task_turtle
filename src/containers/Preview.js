import React from 'react';
import defaultImages from '../DefaultImages';
import { StyleSheet, css } from "aphrodite";

class Preview extends React.Component{

  constructor(props){
    super(props);
    this.state = { imgIndex: 0 }
    this.renderImages = this.renderImages.bind(this);
    this.incrementSlider = this.incrementSlider.bind(this);
    this.decrementSlider = this.decrementSlider.bind(this);
  }

  renderImages(){
    let { imgIndex } = this.state,
        imagesArr = new Array();

    for(var i = 0; i < 3; i++){
      imagesArr.push(
         <div className={css(styles.preview_img)} key={imgIndex + i}>
          <img className={css(styles.preview_img_img)} src={ defaultImages[imgIndex + i].img_url } />
          <div className={css(styles.preview_img_title)}>
           { defaultImages[imgIndex + i].title }
          </div>
         </div>)
     }
     return imagesArr;
  };

  incrementSlider(){
    let { imgIndex } = this.state;
    if(imgIndex === defaultImages.length - 1){
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
      <button
        onClick={() => { this.incrementSlider() }}
        className={css(styles.preview_inc_button)}>
       <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
      </button>
        {this.renderImages()}
        <button
         onClick={() => { this.decrementSlider() }}
         className={css(styles.preview_dec_button)}>
        <i className="fa fa-arrow-circle-left" aria-hidden="true"></i>
        </button>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  preview_container: {
    border: "1px solid",
    width: "80%",
    height: "30vh",
    display: "flex",
    flexDirection: "row",
    margin: "0 auto",
    position: "relative",
    justifyContent: "space-evenly",
    alignItems: ""
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
    borderStyle: "solid",
    backgroundColor: "red",
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
    top: "25%"
  }
});

export default Preview;
