import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions/index';
import { PacmanLoader } from 'react-spinners';


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
          <PacmanLoader
            sizeUnit={"px"}
            size={150}
            color={'#123abc'}
            loading={memesOnLoad.loading}
          />
       </div>
      )
    } else if(memesOnLoad.initialLoad){
       return(
             <div className={css(styles.feed_images_updating)}>
              <div>Updating In Real Time.</div>
              <PacmanLoader
               color={"blue"}
               loading={memesOnLoad.initialLoad}
               />
             </div>)
    } else{
      return memesOnLoad.data.map((obj, index) => {
        return(
          <div key={index} className={css(styles.feed_image_container)}>
            <img className={css(styles.feed_images)} src={ obj.image } />
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
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column-reverse',
    alignItems: 'center'
  },
  feed_image_container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '3%'
  },
  feed_images: {
    maxWidth: '50%'
  },
  feed_images_updating: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    height: '25vh',
    flexDirection: 'column',
    alignItems: 'center'
  }
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
