import React from 'react';
import logo from '../assets/images/logo.svg';

const Header = () => {
    return (
        <nav className='navbar'>
            <div className='navbar-logo'>
                <img className='navbar-logo__icon' src={logo} alt='Logotipo'/>
            </div>
            <div className='navbar-icon'>
                <span className='navbar-icon__img'>Icon</span>
            </div>
            <div className='navbar-menu'>
                <ul className='navbar-menu-list'>
                    <li className='navbar-menu-list__item'>Features</li>
                    <li className='navbar-menu-list__item'>Pricing</li>
                    <li className='navbar-menu-list__item'>Resources</li>
                    <li className='navbar-menu-list__item navbar-menu-list__item--separator '>Login</li>
                    <li className='navbar-menu-list__item button-primary button-primary--navbar'>Sing Up</li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
