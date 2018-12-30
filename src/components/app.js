import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root'
import { Route,  HashRouter as Router } from 'react-router-dom';
import Landing from '../containers/Landing';
import UserProfile from '../containers/UserProfile';
import Heading from '../containers/Heading';
import Authenticated_Routes from '../containers/Authenticated_Routes';
import Footer from '../components/Footer';

function App() {
  return (
<Router>
  <div>
    <Authenticated_Routes />
    <Route exact path="/UserProfile" component={UserProfile} />
    <Route exact path="/" component={Landing} />
    <Footer />
  </div>
</Router>
    );
};

export default hot(App);
