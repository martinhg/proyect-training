import React from 'react';
import SocialIcons from '../SocialIcons/SocialIcons';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <header className="header-container">
            <SocialIcons />
            <Navbar />
        </header>  
    );
}

export default Header;