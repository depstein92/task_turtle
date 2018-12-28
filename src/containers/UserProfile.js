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
  };

  componentDidMount(){
  const { getUserData } = this.props;
   getUserData();
  };

  renderUserProfile = () => {
    const { userData } = this.props;
  };

  render(){
    console.log('user data', this.props);

    return(
      <div className={'user-profile-container'}>
      I am user profile
      </div>
    )
  };
};

const mapDispatchToProps = dispatch => {
 return bindActionCreators({ getUserData: actions["getUserProfileInfo"] }, dispatch);
};


const mapStateToProps = state => {
  return {
    userData: state.userData
  };
};

export default connect( mapStateToProps, mapDispatchToProps)(UserProfile);
