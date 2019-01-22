import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Image, Message } from 'semantic-ui-react';
import actions from '../actions/index';
import SignUp from './SignUp';
import PopularTasks from '../components/PopularTasks';
import HowItWorks from '../components/HowItWorks';
import RealPeopleRealTasks from '../components/RealPeopleRealTasks';

class Landing extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      isFormDataLoaded: false,
      userName: '',
      password: '',
      isLoginOrSignUp: false
    };
  };

  onEventChange = e => {
    this.setState({
      [e.target.name] : e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const {reqLoginData} = this.props;
    const {userName, password} = this.state;
    reqLoginData(userName, password);
    this.setState({
      userName: '',
      password: ''
    });
  };

  onSelectLogin = () => this.setState({ isLoginOrSignUp: true });

  onSelectSignUp = () => this.setState({ isLoginOrSignUp: false });


  renderLoginForm = () => {
    const {userName, password} = this.state;
    return(
      <div className={"landing__login-form"}>
        <h1 className={'landing__login-form--title'}>Log In</h1>
        <form onSubmit={this.onSubmit} >
          <label>
              Name:
              <input name="userName"
               value={userName}
               onChange={this.onEventChange}
               data-test="input-box"
               />
          </label>
          <label>
              Password:
             <input name="password"
              value={password}
              onChange={this.onEventChange}
              data-test="input-box"
              />
          </label>
           <input type="submit" data-test="login-submit" value="Submit" />
        </form>
        <div className={"landing__sign-up-button"}
            onClick={() => {this.onSelectLogin()}}>
          Did you mean to Sign Up? Click here.
        </div>
      </div>
    )
  }



  renderLoginOrSignUp = () => {
    const LoginOrSignUp =
        this.state.isLoginOrSignUp ?
        <SignUp onSelectSignUp={this.onSelectSignUp} /> :
        this.renderLoginForm();

    return(
    <div>
      { LoginOrSignUp }
    </div>
    )
  }

  render() {
    return (
      <div className="landing">
        <div className={"landing hero-image"}>

          <Image src={'https://assets.taskrabbit.com/v3/assets/static/heros/homepage/hero-v2-b4c1033eac5b640d40b824503e42aff0.jpg'}
                 />
          <div className="landing hero-image--title">
           Welcome to Task Turtle
          </div>
        </div>
        { this.renderLoginOrSignUp() }
        <PopularTasks />
        <HowItWorks />
        <RealPeopleRealTasks />
     </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    registerUserMessage: state.register_message
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ reqLoginData: actions['sendLoginRequest']}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
