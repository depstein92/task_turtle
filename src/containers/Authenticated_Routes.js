import React from 'react';
import { Route,
         HashRouter as Router,
         Link,
         Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Landing from './Landing';


const Authenticated_Routes = props => {

  const { isAuthenticated  } = props.loggedIn.payload;

  if(isAuthenticated){
    return(
      <Redirect to="/UserProfile" />
    )
  } else{
    return(
      <Route exact path="/" component={Landing} />
    )
  }
};

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn
  }
}

export default connect(mapStateToProps)( Authenticated_Routes);
