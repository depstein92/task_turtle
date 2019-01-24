import React, { Component } from 'react';
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
  Modal,
  Header,
  Message
} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import actions from '../actions/index';


class EditProfile extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      profile_picture: '',
      description: '',

    }
  };

  onSubmit = e => {
    e.preventDefault();
  };

  handleChange = e => {
  this.setState({
    [e.target.name] : e.target.value
  })
}

  render(){
    return(
   <div className="edit-profile">
      <Form onSubmit={this.onSubmit}>
        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='Username'
            name="userName"
            placeholder='User Name'
            onChange={this.handleChange}
            error={this.state.userNameError}
            />
          <Form.Field
            control={Input}
            label='Title'
            name="title"
            placeholder='Title'
            onChange={this.handleChange}
            error={this.state.titleError}
            />
          <Form.Field
            control={Input}
            label='Location'
            name="location"
            placeholder='Location'
            onChange={this.handleChange}
            error={this.state.locationError}
            />
          <Form.Field
            control={Input}
            label='Date'
            name="date"
            placeholder='Date'
            onChange={this.handleChange}
            error={this.state.dateError}
            />
        </Form.Group>
        <Button type='submit'>
         Submit
        </Button>
     </Form>
  </div>
    )
  }
}

export default EditProfile;
