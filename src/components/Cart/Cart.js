import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    let totalPrice = 0;
    let shipping = 0;
    for (const product of cart) {
        totalPrice = totalPrice + product.price;
        shipping = shipping + product.shipping;
    }
    const vat = parseFloat((totalPrice * .1).toFixed(2));
    const grandTotal = totalPrice + shipping + vat;
    return (
        <div className='cart'>
            <h4>Selected Items: {cart.length}</h4>
            <p>Total Price: ${totalPrice}</p>
            <p>Shipping: ${shipping}</p>
            <p>Vat: ${vat}</p>
            <h4>Grand Total: ${grandTotal}</h4>
        </div>
    );
};

export default Cart;