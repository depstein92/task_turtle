import React from 'react';
import { Link } from 'react-router-dom';
import { StyleSheet, css } from "aphrodite";
import globalStyles from "../ReusableStyles";

class Heading extends React.Component{
  render(){
    return(
      <div className={css(styles.heading_container)}>
       <div className={css(styles.link)}>
         <Link to="/">Create Meme</Link>
       </div>
       <div className={css(styles.link)}>
         <Link to="/">Blank Link</Link>
       </div>
       <div className={css(styles.link)}>
         <Link to="/">Blank Link</Link>
       </div>
       <div className={css(styles.link)}>
         <Link to="/">Blank Link</Link>
       </div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
   heading_container: {
    width: '100%',
    backgroundColor: 'blue',
    height: '15vh',
    borderBottom:'5px solid',
    marginBottom: '30px',
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "flex-end"
   },
   link: {
     fontFamily: globalStyles.primaryFont.fontFamily,
     color: "inherit",
     cursor: "pointer",
     fontSize: "3vh"
   }
});

export default Heading;
