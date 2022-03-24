import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'


const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="logo" />
            <div>
                <a href="/home">Home</a >
                <a href="/products">Products</a >
                <a href="/cart">Cart</a >
                <a href="/about">About</a >
            </div>
        </nav>
    );
};

export default Header;