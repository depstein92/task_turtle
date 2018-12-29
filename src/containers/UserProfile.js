import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Image, Card, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import UserRecentJobs from './UserRecentJobs';
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
    const { name, picture } = this.props.userData.payload;
    return(
   <Card
    className={"user-profile"}
    image={picture.large}
    header={name.first}
    meta='Friend'
    description='Name is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
    extra={<p>Rating 8 out of 10</p>}
   />
    )
  };

  render(){
    console.log('user data', this.props);

    return(
      <div className={'user-profile-container'}>
      { this.renderUserProfile() }
      <UserRecentJobs />
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
