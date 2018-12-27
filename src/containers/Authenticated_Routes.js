import React from 'react';
import { Route,
         HashRouter as Router,
         Link,
         Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Landing from './Landing';


const Authenticated_Routes = props => {
  const { isLoggedIn } = props;
  if(isLoggedIn){
    return(
      <Redirect to="/UserProfile" />
    )
  } else{
    return(
      <Route exact path="/" component={Landing} />
    )
  }
};

const mapStateToProps = state  => {
  return {
    isLoggedIn: state.loggedIn
  };
};

export default connect(null, mapStateToProps)(Authenticated_Routes);
