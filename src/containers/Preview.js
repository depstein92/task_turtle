import React from 'react';
import defaultImages from '../DefaultImages';
import { StyleSheet, css } from "aphrodite";

class Preview extends React.Component{
  render(){
    return(
      <div className={css(styles.preview_container)}>
        <div className={css(styles.img_track)}>
        { defaultImages.map((index, img) => {
          return (
            <div className={css(styles.preview_container__img)} key={index}>
             <h3 className={css(styles.preview_container__img_title)}>{img.title}</h3>
             <img src={img.image_url} />
           </div>)
        }) }
        </div>
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
    margin: "0 auto"
  },
  img_track:{
    marginTop: "22px",
    height: "205px",
    marginBottom: "5px",
    backgroundColor: "blue",
    width: "100vw",
    display: "flex",
    flexFlow: "wrap row",
    justifyContent: "space-evenly",
    zIndex: 0,
    alignItems: "center",
    overFlowY: "scroll"
  },
  preview_container__img: {
    backgroundColor: "red",
    height: "30px",
    borderStyle: "solid",
    zIndex: 1,
    width: "100px",
    height: "100px"
  }
});

export default Preview;
