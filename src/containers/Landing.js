import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import '../style/Landing.scss';


class Landing extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      isFormDataLoaded: false,
      userName: '',
      password: ''
    }
  };

  onEventChange = (e) => {
    this.setState({
      [name] : e.target.value
    });
  };

  onSubmit = e => e.preventDefault();

  render() {
    return (
      <div className="landing-container">
        <div className={'hero_content'}>
          <strong className={'landing_page-Hero'}>
           Welcome To Task Turtle!
          </strong>
        </div>
        <form onSubmit={htis.onSubmit}>
         <input name="userName" onChange={this.onEventChange} />
         <input name="password" onChange={this.onEventChange} />
        </form>
     </div>
    )
  }
}

export default Landing;
