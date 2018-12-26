import React, { Component } from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';
import Landing from '../containers/Landing';
//import Heading from '../containers/Heading';

export default function App() {
  return (
    <Router>
     <div>
       <Route exact path="/" component={Landing} />
     </div>
    </Router>
    );
};
