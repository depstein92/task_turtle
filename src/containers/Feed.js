import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Feed extends React.Component{
  constructor(props){
    super(props);
    this.state = { p: 0 }
  }
  render(){
    return(
      <div className={css(styles.imageLine_container)}>

      </div>
    )
  }
}

const styles = StyleSheet.create({
  imageLine_container: {
    backgroundColor: 'indianred',
    position: 'absolute',
    width: '100%',
    height: '100vh'
  }
});

export default Feed;
