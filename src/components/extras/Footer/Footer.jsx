import React from 'react';
import './styles.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer-text">Made with React.js</p>
            <img src='./assets/react.svg' className='footer-icon' />
            <a href="https://github.com/asrato/github-users" target={'_blank'} className='footer-link'>
                <img src='./assets/github.svg' className='footer-icon' />
            </a>
            <p className="footer-text">by André da Silva Rato</p>
        </footer>
    );
};

export default Footer;