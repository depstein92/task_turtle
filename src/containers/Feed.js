import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions/index';


class Feed extends React.Component{
  constructor(props){
    super(props);
    this.state = { memes: [] }
  }

  componentDidMount(){
    let { memesOnLoad, getImageFeed } = this.props;
    let { memes } = this.state;
    getImageFeed();
  }



  render(){
    console.log(this.props);
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

const mapStateToProps = state =>  {
  return {
    memesOnLoad: state.addImagesToFeedReducer
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ getImageFeed: actions.addImagesToFeedOnLoadSuccess}, dispatch);


export default connect(mapStateToProps,mapDispatchToProps)(Feed);
