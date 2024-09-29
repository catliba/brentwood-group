import React from 'react';
import '../css/header.css'

const Header = () => {
  return (
    <nav className='nav'>
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
        </ul>
    </nav>
  );
};

export default Header;