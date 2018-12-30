import React, { Component } from 'react';


class Messaging extends React.Component{
  constructor(props){
    super(props);
    this.state ={ data: ''};
  }

  render(){
    return(
      <div className={"messaging-container"}>
       I am the messaging container
      </div>
    )
  }
}

export default Messaging;
