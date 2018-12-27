import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import actions from '../actions/index';
import '../style/Landing.scss';

class UserProfile extends React.Component{
  constructor(props){
    super(props);

    this.state = { data: {} }
  }

  render(){
    return(
      <div></div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userData: state.user_info
  }
}

export default connect(null, mapStateToProps)(UserProfile);
