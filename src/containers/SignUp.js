import React, {Component} from 'react';
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
    e.preventDefault();
  }

  onEventChange = e => {
    this.setState({
      [name]: e.target.value
    });
  }

  render(){
    return(
      <div className={'signup-form-container'}>
        <h1 className={'signup-title'}>
            Sign Up
        </h1>
        <form onSubmit={this.onSubmit} className={"landing-container__signup-form"}>
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
      </div>
    )
  }
}

export default SignUp;
