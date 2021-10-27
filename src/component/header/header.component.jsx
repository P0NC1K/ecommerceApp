import React from 'react';
import { Link } from 'react-router-dom';

import './header.style.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';

import { auth } from '../../firebase/firebase.config';

const Header = ({ currentUser }) => {
    return (
        <div className="header">
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>

            <div className="link-list">
                <Link className='list-element' to='/shop'>
                    SHOP
                </Link>
                <Link className='list-element' to='/contacts'>
                    CONTACTS
                </Link>
                {
                    currentUser ? (
                        <div className='list-element' onClick={() => auth.signOut()}>SIGN OUT</div>
                    ) : (
                        <Link className='list-element' to='/signin'> SIGN IN </Link>
                    )
                }
            </div>
        </div>
    )
}

export default Header;