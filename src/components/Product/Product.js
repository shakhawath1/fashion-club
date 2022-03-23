import React from 'react';
import './Product.css';

const Product = ({ product, addToCart }) => {
    const { img, name, category, price, seller } = product;

    return (

        <div className='product'>
            <img src={img} alt=''></img>
            <div className='product-info'>
                <h4>{name}</h4>
                <p>Category: {category}</p>
                <p>Price: ${price}</p>
                <p>Seller: {seller} </p>
            </div>
            <button className='cart-btn' onClick={() => addToCart(product)}>Add to cart</button>
        </div>

    );
};

export default Product;