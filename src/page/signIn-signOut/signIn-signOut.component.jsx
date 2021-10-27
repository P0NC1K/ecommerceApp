import React from 'react';
import SignIn from '../../component/SignIn/SignIn.component';
import SignUp from '../../component/SignUp/SignUp.component';

import './signIn-signOut.style.scss'

const SignInSignOut = () => (
    <div className="SignContainer">
        <SignIn />
        <SignUp />
    </div>
)

export default SignInSignOut;