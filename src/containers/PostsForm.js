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
        <Form>
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
            <Form.Field control={Button}>Submit</Form.Field>
       </Form>
      </div>
    )
  }
}

export default PostsForm;
