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

class PostsForm extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      userName: '',
      title: '',
      location: '',
      date: '',
      description: '',
      userNameError: false,
      titleError: false,
      locationError: false,
      dateError: false,
      descriptionError: false,
      errorMessage: '',
      isFormError: false
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  onSubmit = e => {
    const {toggleForm, postJob} = this.props;
    const {userName,title,location,date,description} = this.state;
    const isFormValid = this.validateForm();

     if(isFormValid){
       toggleForm();
       postJob(userName, title, description, location, date);
     }
  }

  validateForm = () => {
    const {userName,title,location,date,description} = this.state;

    if(userName === ''){
      this.setState({
        userNameError: true,
        isFormError: true,
        errorMessage: 'User name is a Required Field',
      })
      return false;
    } else if(title === ''){
      this.setState({
        titleError: true,
        isFormError: true,
        errorMessage: 'Title is a Required Field'
      })
      return false;
    } else if(location === ''){
      this.setState({
        locationError: true,
        isFormError: true,
        errorMessage: 'Location is a Required Field'
      })
      return false;
    } else if(date === ''){
      this.setState({
        dateError: true,
        isFormError: true,
        errorMessage: 'Location is a Required Field'
      })
      return false;
    } else if(description === ''){
      this.setState({
        descriptionError: true,
        isFormError: true,
        errorMessage: 'Description is a Required Field'
      });
      return false;
    } else {
      this.setState({
        userNameError: false,
        titleError: false,
        locationError: false,
        dateError: false,
        descriptionError: false,
        isFormError: false,
      });
      return true;
    }
  }

  termsAndConditions = () => (
    <Modal trigger={<Button>Terms and Conditions</Button>}>
      <Modal.Content image>
        <Modal.Description>
          <Header>Terms and Conditions</Header>
          <p>Lorem Ispum...</p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )

  render(){
    return(
      <div className="posts-form">
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
            <Form.Field
             control={TextArea}
             label='Description of Job'
             name="description"
             placeholder='Place description here'
             onChange={this.handleChange}
             error={this.state.descriptionError}
             />
            <Form.Field>
              { this.termsAndConditions() }
            </Form.Field>
             <Button type='submit'>
              Submit
              </Button>
       </Form>
       {
         this.state.isFormError ?
           <Message negative>
               <Message.Header>
                { this.state.errorMessage}
               </Message.Header>
             </Message> :
            <div />
       }
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ postJob: actions['postJobsToFeedSuccess'] }, dispatch);
}

export default connect(null, mapDispatchToProps)(PostsForm);
