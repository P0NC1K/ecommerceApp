import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './component/PrivateRoute/PrivateRoute.component';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import HomePage from './page/homepage/homepage.component'
import ShopPage from './page/shop/shop.component';
import SignInSignOut from './page/Sign/signIn-signOut.component';
import Header from './component/header/header.component.jsx'
import AuthProvider from './contexts/AuthContext.context';

export default function App() {

  return (
    <div className="App">
          <AuthProvider>
            <Header/>
            <Switch>
              <Route exact path='/' component={HomePage} /> 
              <PrivateRoute exact path='/shop' component={ShopPage} /> 
              <Route exact path='/signin' component={SignInSignOut} />
            </Switch>
          </AuthProvider>
      </div>
  );
}
