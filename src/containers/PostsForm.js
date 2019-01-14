import React from 'react';
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea
} from 'semantic-ui-react';


class PostsFrom extends React{

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
            <Form.Field
             control={Checkbox}
             label='I agree to the Terms and Conditions'
             />
            <Form.Field control={Button}>Submit</Form.Field>
       </Form>
      </div>
    )
  }
}

export default PostsForm;
