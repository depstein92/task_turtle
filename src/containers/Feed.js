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
   //getImageLoad();
   console.log('p', this.props);
   console.log('a', actions.addImageToFeedLoading);
   getImageFeed();
  }

  renderMemes = () => {
    let { memesOnLoad, getImageFeed } = this.props;
    let { memes } = this.state;

    if(memesOnLoad.loading){
      return(
        <div className='sweet-loading'>
          <ClipLoader
            className={override}
            sizeUnit={"px"}
            size={150}
            color={'#123abc'}
            loading={this.state.loading}
          />
       </div>
      )
    } else{
      // return memesOnLoad.map(obj => {
      //   <div>
      //    <img src={ obj.image } />
      //    <div>{ obj.narrative }</div>
      //    <div> title: { obj.title }</div>
      //   </div>
      // });
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
           getImageFeed: actions.addImagesToFeedOnLoadSuccess,
           getImageLoad: actions.addImageToFeedLoading },
           dispatch);


export default connect(mapStateToProps,mapDispatchToProps)(Feed);
