import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions/index';

class Messaging_Inbox extends React.Component{

  constructor(props){
    super(props);

    this.state = { activeItem: '' }
  }

  render(){
    console.log(this.props);
    return(
  <div className={"messaging-container"}>
    <div className={"messaging-inbox"}>
    Messaging_Inbox
    </div>
  </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    messages: state.messages_inbox
  }
}



export default connect(mapStateToProps)(Messaging_Inbox);
