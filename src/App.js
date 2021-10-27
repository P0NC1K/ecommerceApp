import React, {useState, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
 
import './App.css'

import HomePage from './page/homepage/homepage.component'
import ShopPage from './page/shop/shop.component';
import SignInSignOut from './page/signIn-signOut/signIn-signOut.component';
import Header from './component/header/header.component.jsx'

import { auth } from './firebase/firebase.config'

function App() {
  const [currentUser, setCurrentUser] = useState();

  useEffect( () => {
    const unsubscribe = auth.onAuthStateChanged( user => {
        setCurrentUser(user);
        console.log(user);
    })

    return unsubscribe;
  }, [])

  return (
    <div className="App">
      <Header currentUser={ currentUser }/>
      <Switch>
        <Route exact path='/' component={HomePage} /> 
        <Route exact path='/shop' component={ShopPage} /> 
        <Route exact path='/signin' component={SignInSignOut} />
      </Switch>
    </div>
  );
}

export default App;
