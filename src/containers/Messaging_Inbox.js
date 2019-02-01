import React, { Component } from 'react';
import { Menu, Radio, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions/index';

class Messaging_Inbox extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      activeItem: '',
      visibleIndex: -1
    }
  }

  componentDidMount(){
   const { getUserMessages } = this.props;
   const { username } = this.props.userData.isLoggedIn.data;
   debugger;
   getUserMessages(username);
  }

  renderNotVisible = index => {
   this.setState({
     visibleIndex: index
   });
  }


  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  renderMessagingInbox = () => {
    const { messages, deleteUserMessage } = this.props;
    const { username } = this.props.userData.isLoggedIn.data;
    const { activeItem, visibleIndex } = this.state;
    return messages.payload.data.messages.map((obj, index) => {
      if(visibleIndex === index){
        return <div />
      } else{
       return(
         <div key={index}>
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
              { obj.date }
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
            <Menu.Item>
              <Icon
               className="delete-icon"
               size={"large"}
               name="close"
               onClick={
                  () => {
                  this.renderNotVisible(index)
                  // deleteUserMessage({
                  //          userName: username,
                  //          client: obj.client,
                  //          title: obj.title,
                  //          date: obj.date,
                  //          time: obj.time
                  //       })
                 }
               }/>
            </Menu.Item>
        </Menu>

       </div>
       )
      }
    });
  }

  render(){
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
    getUserMessages: actions['getUsersMessagesSuccess'],
    deleteUserMessage: actions['deleteMessageSuccess']
  }, dispatch)
};


export default connect(mapStateToProps, mapDispatchToProps)(Messaging_Inbox);
