import React, {Component} from 'react';
import actions from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Feed extends React.Component{
  constructor(props){
    super(props);

    this.state = { data: 0 }
  }

  componentDidMount(){
   const {getAllPosts} = this.props;
   getAllPosts();
  }

  render(){
    return(
      <div>
        Feed
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getAllPosts: actions['getAllPostsSuccess']}, dispatch);
}

export default Feed;
