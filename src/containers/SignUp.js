import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions/index';
import '../style/SignUp.scss';

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
      <div className={'signup-form-container'}>
        <h1 className={'signup-title'}>Sign Up</h1>
        <form onSubmit={this.onSubmit} className={"landing-container__signup-form"}>
        <label>
          Name: <input name="userName" onChange={this.onEventChange} />
        </label>
        <label>
         Password: <input name="password" onChange={this.onEventChange} />
        </label>
         <input type="submit" value="Submit" />
        </form>
        <div className={"LogIn-button"} onClick={() => {this.props.onSelectSignUp()}}>
          Did you mean to Log In? Click here.
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ registerUser: actions['registerUser'] }, dispatch);

export default connect(null, mapDispatchToProps)(SignUp);
