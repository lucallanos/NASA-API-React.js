import React from 'react';
import './Header.css';
import logo from '../../images/NASA.Logo.png';

function Header() {
    return (
        <div className='Header'>
            <h1>NASA APP</h1>
            <img src={logo} alt="NASA-Logo" width='220' height='170' />
        </div>
    )
}

export default Header
