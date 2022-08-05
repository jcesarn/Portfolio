import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <div className='header-container'>
                <div className='header-home-page'>
                    <a href='#'>Home</a>
                </div>
                <div className='header-about-page'>
                    <a href='#about'>About</a>
                </div>
                <div className='header-home-experience-page'>
                    <a href='#experience'>Experience</a>
                </div>
                <div className='header-home-projects-page'>
                    <a href='#projects'>Projects</a>
                </div>
                <div className='header-contact-page'>
                    <a href='#contact'>Contact</a>
                </div>
            </div>
        );
    }
}