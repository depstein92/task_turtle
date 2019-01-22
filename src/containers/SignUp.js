import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions/index';

class SignUp extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      userName: '',
      password: ''
    }
  }

  onSubmit = e => {
    const { userName, password } = this.state;
    const { registerUser } = this.props;
    e.preventDefault();

    registerUser(userName, password);
  }

  onEventChange = e => {
    this.setState({
      [name]: e.target.value
    });
  }

  render(){
    return(
      <div className={'landing__login-form'}>
          <h1 className={'landing__login-form--title'}>
            Sign Up
           </h1>
            <form onSubmit={this.onSubmit}>
              <label>
              Name:
              <input
               name="userName"
               onChange={this.onEventChange}
               data-test="input-username"
               />
              </label>
              <label>
               Password:
               <input
                name="password"
                onChange={this.onEventChange}
                data-test="input-password"
                />
              </label>
               <input type="submit" data-test="submit-signup" value="Submit" />
            </form>
          <div className={"landing__sign-up-button"} onClick={() => {this.props.onSelectSignUp()}}>
            Did you mean to Log In? Click here.
          </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ registerUser: actions['registerUser'] }, dispatch);

export default connect(null, mapDispatchToProps)(SignUp);
