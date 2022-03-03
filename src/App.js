import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import Details from './pages/details/details.component';
import Header from '../src/component/header/header.component';


class App extends React.Component{

  render(){
    return (
      <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/details' component={Details} />
      </Switch>
      </div>
    );
  }
  
}

export default App;
