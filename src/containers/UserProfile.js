import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import actions from '../actions/index';
import '../style/UserProfile.scss';

class UserProfile extends React.Component{
  constructor(props){
    super(props);

    this.state = { data: {} }
  }

  renderUserProfile = () => {
    let { userData } = this.props;
  }

  render(){
    console.log('user data', this.props);

    return(
      <div className={'user-profile-container'}>
      {this.renderUserProfile()}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {

}


const mapStateToProps = state => {
  return {
    userData: state.user_info
  }
}

export default connect(null, mapStateToProps)(UserProfile);
