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

  componentDidMount(){
    const { getMessages } = this.props;

    getMessages();
  }

  renderMessages = () => {
    const { messages_inbox } = this.props;
    //conso
    //  return messages.map(message => {
    //   return(
    //     <Menu className={"message"}>
    //       <Menu.Item
    //         name='editorials'
    //         active={this.state.activeItem === 'editorials'}
    //         onClick={this.handleItemClick}
    //         >
    //         check read
    //       </Menu.Item>
    //       <Menu.Item name='title' active={this.state.activeItem === 'title'} onClick={this.handleItemClick}>
    //
    //         { message }
    //       </Menu.Item>
    //
    //       <Menu.Item
    //         name='upcomingEvents'
    //         active={this.state.activeItem === 'upcomingEvents'}
    //         onClick={this.handleItemClick}
    //       >
    //         Open
    //       </Menu.Item>
    //     </Menu>
    //   )
    // })

  }

  render(){
    console.log(this.props);
    return(
  <div className={"messaging-container"}>
    <div className={"messaging-inbox"}>
      { this.renderMessages() }
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

const mapDispatchToProps = dispatch => bindActionCreators({ getMessages: actions['getUsersMessages'] }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Messaging_Inbox);
