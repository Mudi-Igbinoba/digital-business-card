import React from 'react';
import mail from '../assets/icons/mail.svg';
import linkedin from '../assets/icons/linkedin.svg';
import profile from '../assets/images/profile.jpg';

const Info = () => {
    return (
        <header>
            <img
                src={profile}
                alt='Selfie of Mudi Igbinoba'
                className='profile'
            />
            <div className='container'>
                <h1>Mudi Igbinoba</h1>
                <p className='title'>Frontend Developer</p>
                <p className='website'>
                    <a href='https://mudee.netlify.app/' target='_blank'>
                        Website
                    </a>
                </p>
                <div className='button-div'>
                    <a
                        href='mailto:ruth.igbinoba12@gmail.com'
                        className='btn white-btn'>
                        <img src={mail} alt='Mail Icon' />
                        Email
                    </a>

                    <a
                        href='https://www.linkedin.com/in/osamudiame-igbinoba/'
                        target='_blank'
                        className='btn blue-btn'>
                        <img src={linkedin} alt='LinkedIn Icon' />
                        LinkedIn
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Info;
