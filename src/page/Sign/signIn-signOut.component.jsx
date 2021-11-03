import React from 'react';
import SignUp from '../../component/SignUp/SignUp.component.jsx';
import LogIn from '../../component/SignIn/LogIn.component.jsx';

import './signIn-signOut.style.scss'

const SignInSignOut = () => (
    <div className="SignContainer">
        <div className="SignComponent">
            <SignUp />
        </div>
        <div className="SignComponent">
            <LogIn />
        </div>
    </div>
)

export default SignInSignOut;