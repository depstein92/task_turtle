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
import {bindActionCreators} from 'redux';
import actions from '../actions/index';

class EditProfile extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: '',
      description: '',
      isInputEmptyMessage: ''
    };
  }

  handleSubmit = e =>  {
    e.preventDefault();
    const { file, description } = this.state;
    const { editProfilePicture, editProfileDescription } = this.props;
    const { username } = this.props.userData.isLoggedIn.data;
    const fileName = file.name;

    if(file === '' && description === ''){
      this.setState({
        isInputEmptyMessage: 'Missing input'
      });
      return;
    } else if(description === ''){
       editProfilePicture(username, file.name);
       this.setState({ isInputEmptyMessage: ''});
    } else if(file === ''){
      editProfileDescription(username, description);
      this.setState({ isInputEmptyMessage: ''});
    }
  }

  handleImageChange = e =>  {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file)
  }

 handleDescription = e => {
   this.setState({
     description: e.target.value
   });
 }

  renderImagePreview = () => {
    let { imagePreviewUrl } = this.state;

    return imagePreviewUrl ?
          <img src={imagePreviewUrl} /> :
          <div className="previewText">
            Please select an Image for Preview
          </div>
  }

  render() {
    return (
    <div>
      <div className="previewComponent">
        <h1>Edit Profile</h1>
        <form onSubmit={(e)=>this.handleSubmit(e)}>
          <label>Edit Profile Picture</label>
          <input className="fileInput"
            type="file"
            data-test="file-input"
            onChange={(e)=>this.handleImageChange(e)} />
          <label>Edit Profile Description</label>
          <input className="description"
            type="input"
            name="description"
            data-test="description-input"
            onChange={this.handleDescription} />
          <button className="submitButton"
            type="submit"
            data-test="submitButton"
            onClick={(e)=>this.handleSubmit(e)}>Upload Image</button>
        </form>
        <div className="imgPreview">
          { this.renderImagePreview() }
        </div>
        <div className="form-message">
          { this.state.isInputEmptyMessage }
        </div>
      </div>
    </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    editProfilePicture: actions['editProfilePictureSuccess'],
    editProfileDescription: actions['editProfileDescriptionSuccess']
  },dispatch);
}

const mapStateToProps = state => {
  return {
    message: state.editProfileMessage,
    userData: state.isAuthenticated
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
