import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './header.style.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';

import { useAuth } from '../../contexts/AuthContext.context';
import { Alert } from 'react-bootstrap';

const Header = () => {
    const [error, setError] = useState("");
    const { currentUser, logout } = useAuth();
    const history = useHistory();

    async function handleLogOut() {
        try {
            setError("");
            await logout();
            history.push('/signIn')
        }catch {
            setError("Failed to logout")
        }
    }

    console.log(currentUser)

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
                        <>
                            { error && <Alert variant='danger'> { error } </Alert> }
                            <div className='list-element' onClick={ handleLogOut }> SIGN OUT </div>
                            <Link className='list-element' to='/userProfile'> {currentUser.displayName} </Link>
                        </>
                    ) : (
                        <Link className='list-element' to='/signin'> SIGN UP/SIGN IN </Link>
                    )
                }
            </div>
        </div>
    )
}

export default Header;