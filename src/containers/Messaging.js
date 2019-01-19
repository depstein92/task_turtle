import React, { Component } from 'react';
import { ChatFeed, Message } from 'react-chat-ui';
import { Menu, Image, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Messaging extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        message: '',
        messages: [
          new Message({
            id: 1,
            message: "I'm the recipient! (The person you're talking to)",
          }), // Gray bubble
          new Message({ id: 0, message: "I'm you -- the blue bubble!" }), // Blue bubble
        ],
      isTyping: false
    };
  }

  onHandleChange = e => {
    const { loading } = this.state;
    this.setState({ message: e.target.value });
  };

  MessagingHeader = () => {
      const { name, picture } = this.props.userData.payload;
      return(
      <div>
        <Menu pointing secondary className={'heading-menu'}>
          <Menu.Menu position='left' className={"heading-menu-profile-image"}>
              <Header as='h2'>
              <Image circular src={picture.thumbnail} />
                <Link to="/UserProfile">
                { name.first }
                </Link>
              </Header>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }

  onSubmit = e => {
    const { message, messages } = this.state;
    const messageObject = new Message({ id: 0, message });

    e.preventDefault();

    this.setState({
      messages: [...messages, messageObject ]
    });
  }


  render(){
    return(
      <div className={"messaging-container"}>
      { this.MessagingHeader() }
        <ChatFeed
          messages={this.state.messages} // Boolean: list of message objects
          isTyping={this.state.isTyping} // Boolean: is the recipient typing
          hasInputField={false} // Boolean: use our input, or use your own
          showSenderName={true} // show the name of the user who sent the message
          bubblesCentered={false} //Boolean should the bubbles be centered in the feed?
          // JSON: Custom bubble styles
          bubbleStyles={
            {
              text: {
                fontSize: 30
              },
              chatbubble: {
                borderRadius: 70,
                padding: 40
              }
            }
          } />
          <form onSubmit={this.onSubmit} className={"messaging-form"}>
           <input
            onChange={this.onHandleChange}
            />
          </form>
      </div>
    )
  };
};

const mapStateToProps = state => {
  return {
    userData: state.userData
  }
};

export default connect(mapStateToProps)(Messaging);
