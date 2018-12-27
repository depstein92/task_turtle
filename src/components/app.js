import React, { Component } from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';
import Landing from '../containers/Landing';
import { hot } from 'react-hot-loader/root'

function App() {
  return (
    <Router>
     <div>
       <Route exact path="/" component={Landing} />
     </div>
    </Router>
    );
};

export default hot(App);
