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
       <Image src={'https://assets.taskrabbit.com/v3/assets/static/heros/homepage/hero-v2-b4c1033eac5b640d40b824503e42aff0.jpg'}
              />
        <div className={"landing-container__Heading"}>
         Welcome to Task Turtle
        </div>
        <form onSubmit={this.onSubmit}>
         <input name="userName" onChange={this.onEventChange} />
         <input name="password" onChange={this.onEventChange} />
         <input type="submit" value="Submit" />
        </form>
     </div>
    )
  }
}

export default Landing;
