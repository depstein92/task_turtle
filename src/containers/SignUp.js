import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Modal, Button, Header, Image, Popup } from 'semantic-ui-react';
import actions from '../actions/index';

class SignUp extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      userName: '',
      password: '',
      isClient: false,
      open: false
    }
  }

  onSubmit = e => {
    const { userName, password, isClient } = this.state;
    const { registerUser } = this.props;
    e.preventDefault();
    registerUser(userName, password, isClient);
  }

  onEventChange = e => {
    this.setState({
      [name]: e.target.value
    });
  }

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render(){
    const { open, dimmer } = this.state
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
              <label>
               <Popup trigger={
                 <span
                  className="landing__login-form--modal"
                  size={'mini'}
                  onClick={this.show('inverted')}
                  >
                   Looking to give tasks?
                 </span>
               } content='What does this mean?' />
                 <input
                  type="radio"
                  name="isClient"
                  onChange={this.onEventChange}
                  value={true}
                  data-test="input-isClient"
                  defaultChecked={this.state.isClient}
                  />
                <Modal dimmer={dimmer} open={open} onClose={this.close}>
                 <Modal.Header>On being a client</Modal.Header>
                 <Modal.Content image>
                   <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
                   <Modal.Description>
                     <Header>Default Profile Image</Header>
                     <p>Being a client means you can give contracts but not request them</p>
                     <p>This is so that Task Turtle knows which category is right for you!</p>
                     <p>Thank you! - Your friends at Task Turtle</p>
                   </Modal.Description>
                 </Modal.Content>
                 <Modal.Actions>
                   <Button
                     positive
                     icon='checkmark'
                     labelPosition='right'
                     content="Got it"
                     onClick={this.close}
                   />
                 </Modal.Actions>
               </Modal>
              </label>
               <input
                type="submit"
                data-test="submit-signup"
                value="Submit"
                />
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
