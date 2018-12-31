import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions/index';

class Messaging_Inbox extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){
    const { getMessages } = this.props;

    getMessages();
  }

  render(){
    return(
  <div className={"messaging-container"}>
    <div className={"messaging-inbox"}>
      <Menu>
        <Menu.Item
          name='editorials'
          active={activeItem === 'editorials'}
          onClick={this.handleItemClick}
         >
          Editorials
        </Menu.Item>

        <Menu.Item name='reviews' active={activeItem === 'reviews'} onClick={this.handleItemClick}>
          Reviews
        </Menu.Item>

        <Menu.Item
          name='upcomingEvents'
          active={activeItem === 'upcomingEvents'}
          onClick={this.handleItemClick}
        >
          Upcoming Events
        </Menu.Item>
      </Menu>
    </div>
  </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    messages: messages_inbox
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ getMessages: actions['getUsersMessages'] }, dispatch);


export default connect(mapDispatchToProps, mapStateToProps)(Messaging_Inbox);
