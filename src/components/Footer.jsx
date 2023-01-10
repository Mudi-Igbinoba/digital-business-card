import React from 'react';
import twitter from '../assets/icons/twitter.svg';
import facebook from '../assets/icons/facebook.svg';
import instagram from '../assets/icons/instagram.svg';
import github from '../assets/icons/github.svg';

const Footer = () => {
    return (
        <footer>
            <a href='https://twitter.com/Mudi_Igbinoba' target='_blank'>
                <img src={twitter} alt='Twitter Icon' />
            </a>

            <a href='#'>
                <img src={facebook} alt='Facebook Icon' />
            </a>

            <a href='#'>
                <img src={instagram} alt='Instagram Icon' />
            </a>

            <a href='https://github.com/Mudi-Igbinoba' target='_blank'>
                <img src={github} alt='Github Icon' />
            </a>
        </footer>
    );
};

export default Footer;
