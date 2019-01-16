import React, {Component} from 'react';
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
  Modal,
  Header
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
      description: ''
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.toggleForm();
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
                />
              <Form.Field
                control={Input}
                label='Title'
                name="title"
                placeholder='Title'
                />
              <Form.Field
                control={Input}
                label='Location'
                name="location"
                placeholder='Location'
                />
              <Form.Field
                control={Input}
                label='Date'
                name="date"
                placeholder='Date'
                />
            </Form.Group>
            <Form.Field
             control={TextArea}
             label='Description of Job'
             name="description"
             placeholder='Place description here'
             />
            <Form.Field>
              { this.termsAndConditions() }
            </Form.Field>
             <Button type='submit'>
              Submit
              </Button>
       </Form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ postJob: actions['postJobsToFeedSuccess'] }, dispatch);
}

export default connect(null, mapDispatchToProps)(PostsForm);
