import React, {Component} from 'react';
import actions from '../actions/index';

class Feed extends React.Component{
  constructor(props){
    super(props);

    this.state = { data: 0 }
  }

  componentDidMount(){

  }

  render(){
    return(
      <div>
        Feed
      </div>
    )
  }
}

export default Feed;
