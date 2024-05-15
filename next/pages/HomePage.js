import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from './Login';
import Test from '../components/test';

const HomePage = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Test} />
        <Route path="/login" component={LoginForm} />
      </Switch>
    </Router>
  );
};

export default HomePage;
