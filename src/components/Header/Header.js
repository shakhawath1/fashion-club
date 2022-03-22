import React from 'react';
import logo from '../../logo.png';
import './Header.css'


const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="logo" />
            <div>
                <a href="/home">Home</a >
                <a href="/products">Products</a >
                <a href="/cart">Cart</a >
                <a href="/about">About</a >
            </div>
        </div>
    );
};

export default Header;