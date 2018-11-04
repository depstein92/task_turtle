import React, { Component } from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';
import Home from '../containers/Home';
import Heading from '../containers/Heading';
import Editor from '../containers/Editor';

export default class App extends Component {
  render() {
    return (
      <Router>
       <div>
        <Heading />
        <Route exact path="/editor" component={Editor} />
        <Route exact path="/" component={Home} />
       </div>
      </Router>
    );
  }
}
