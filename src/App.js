import React from 'react';
import { Route, Switch } from 'react-router-dom';
 
import './App.css'

import HomePage from './page/homepage/homepage.component'

const FoodPage = () => {
  return (
    <h1> I am food </h1>
  )
}

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} /> 
        <Route exact path='/food' component={FoodPage} /> 
      </Switch>
    </div>
  );
}

export default App;
