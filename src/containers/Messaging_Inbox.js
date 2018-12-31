import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

class Messaging_Inbox extends React.Component{
  constructor(props){
    super(props);
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

export default Messaging_Inbox;
