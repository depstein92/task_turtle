import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Image } from 'semantic-ui-react';
import SignUp from './SignUp';
import actions from '../actions/index';
import '../style/Landing.scss';


class Landing extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      isFormDataLoaded: false,
      userName: '',
      password: ''
    };
  };

  onEventChange = (e) => {
    this.setState({
      [name] : e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { reqLoginData } = this.props;
    const {userName, password} = this.state;
    reqLoginData(userName, password);
  };

  render() {
    return (
      <div className="landing-container">
       <Image src={'https://assets.taskrabbit.com/v3/assets/static/heros/homepage/hero-v2-b4c1033eac5b640d40b824503e42aff0.jpg'}
              />
        <div className={"landing-container__Heading"}>
         Welcome to Task Turtle
        </div>
        <form onSubmit={this.onSubmit} className={"landing-container__login-form"}>
        <label>
          Name:
          <input name="userName" onChange={this.onEventChange} />
        </label>
        <label>
        Password:
         <input name="password" onChange={this.onEventChange} />
        </label>
         <input type="submit" value="Submit" />
        </form>
        <SignUp />
     </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ reqLoginData: actions['sendLoginRequest']}, dispatch);
}

export default connect(null, mapDispatchToProps)(Landing);
