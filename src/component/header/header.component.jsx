import React from 'react';
import { Link } from 'react-router-dom';

import './header.style.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';

const Header = () => {
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
                <Link className='list-element' to='/signin'>
                    Sign
                </Link>
            </div>
        </div>
    )
}

export default Header;