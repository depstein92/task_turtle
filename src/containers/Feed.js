import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions/index';
import { ClipLoader } from 'react-spinners';


class Feed extends React.Component{
  constructor(props){
    super(props);
    this.state = { memes: [] }
  }

  componentDidMount(){
  let { getImageFeed, getImageLoad  } = this.props;
   getImageLoad();
   getImageFeed();
  }

  renderMemes = () => {
    let { memesOnLoad, getImageFeed } = this.props;
    let { memes } = this.state;

    if(memesOnLoad.loading){
      return(
        <div className='sweet-loading'>
          <ClipLoader
            sizeUnit={"px"}
            size={150}
            color={'#123abc'}
            loading={memesOnLoad.loading}
          />
       </div>
      )
    } else{
      return memesOnLoad.data.map((obj, index) => {
      return(
        <div key={index}>
         <img src={ obj.image } />
         <div>{ obj.narrative }</div>
         <div> title: { obj.title }</div>
        </div>
      )
      });
    }
  }



  render(){
    console.log(this.props);
    return(
      <div className={css(styles.feed_container)}>
      { this.renderMemes() }
      </div>
    )
  }
}

const styles = StyleSheet.create({
  feed_container: {
    backgroundColor: 'indianred',
    position: 'absolute',
    width: '100%',
    height: '100vh'
  },

});

const mapStateToProps = state =>  {
  return {
    memesOnLoad: state.addImagesToFeedReducer
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
           getImageFeed: actions['addImagesToFeedOnLoadSuccess'],
           getImageLoad: actions['addImagesToFeedLoading'] },
           dispatch);


export default connect(mapStateToProps,mapDispatchToProps)(Feed);
