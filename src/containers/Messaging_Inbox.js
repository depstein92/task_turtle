import React, { Component } from 'react';
import { Menu, Radio } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions/index';

class Messaging_Inbox extends React.Component{

  constructor(props){
    super(props);

    this.state = { activeItem: '' }
  }

  componentDidMount(){
   const { getUserMessages } = this.props;
   const { username } = this.props.userData.isLoggedIn.data;
   getUserMessages(username);
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  renderMessagingInbox = () => {
    const { messages } = this.props;
    const { activeItem } = this.state;

    return messages.payload.data.messages.map(obj => {
     return(
         <Menu id="messages">
          <Menu.Item
            name='client'
            active={activeItem === 'client'}
            onClick={this.handleItemClick}
            >
          <span>From:</span>
            {obj.client}
          </Menu.Item>
          <Menu.Item
            name='title'
            active={activeItem === 'title'}
            onClick={this.handleItemClick}
            >
          <span>Title:</span>
           { obj.title }
          </Menu.Item>
          <Menu.Item
            name='reviews'
            active={activeItem === 'date'}
            onClick={this.handleItemClick}
            >
          <span>Date:</span>
            {obj.date}
          </Menu.Item>
          <Menu.Item
            name='location'
            active={activeItem === 'location'}
            onClick={this.handleItemClick}
            >
          <span>Location:</span>
           { obj.location }
          </Menu.Item>
          <Menu.Item
            name='time'
            active={activeItem === 'time'}
            onClick={this.handleItemClick}
            >
            <span>Time:</span>
             { obj.time }
          </Menu.Item>
          <Menu.Item>
            <Radio toggle />
            <span>Confirm Job:</span>
          </Menu.Item>
      </Menu>
     )
    });
  }

  render(){
    console.log(this.props);
    return(
    <div className={"messaging-container"}>
      <div className={"messaging-inbox"}>
       <h1 className="messaging-inbox__title">
          Messaging
       </h1>
       { this.renderMessagingInbox() }
      </div>
    </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    messages: state.messages_inbox,
    userData: state.isAuthenticated
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getUserMessages: actions['getUsersMessagesSuccess']
  }, dispatch)
};


export default connect(mapStateToProps, mapDispatchToProps)(Messaging_Inbox);
