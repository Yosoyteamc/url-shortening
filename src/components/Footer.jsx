import React from 'react';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-started'>
                <h3 className='footer-started__title'>Boost your links today</h3>
                <button className='footer-started__button'>Get Started</button>
            </div>
            <div className='footer-container'>
                <div className='footer-logo'>
                    <img className='footer-logo__img' />
                </div>
                <div className='footer-menu'>
                    <ul className='footer-menu__items'>
                        <li className='footer-menu-item'>Features</li>
                        <li className='footer-menu-item'>Link Shortening</li>
                        <li className='footer-menu-item'>Branded Links</li>
                        <li className='footer-menu-item'>Analytics</li>
                    </ul>
                    <ul className='footer-menu__items'>
                        <li className='footer-menu-item'>Resources</li>
                        <li className='footer-menu-item'>Blog</li>
                        <li className='footer-menu-item'>Developers</li>
                        <li className='footer-menu-item'>Support</li>
                    </ul>
                    <ul className=''>
                        <li className='footer-menu-item'>Company</li>
                        <li className='footer-menu-item'>About</li>
                        <li className='footer-menu-item'>Our Team</li>
                        <li className='footer-menu-item'>Careers</li>
                        <li className='footer-menu-item'>Contact</li>
                    </ul>
                </div>
            </div>
            <div className='footer-social'>
                <div className='footer-social-icons'>
                    <img className='footer-social-icons__icon'/>
                    <img className='footer-social-icons__icon'/>
                    <img className='footer-social-icons__icon'/>
                    <img className='footer-social-icons__icon'/>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
