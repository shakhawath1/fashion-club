import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {

    let totalPrice = 0;
    let shipping = 0;
    let quantity = 0;

    for (const product of cart) {
        quantity = quantity + product.quantity;
        totalPrice = totalPrice + (product.price * product.quantity);
        shipping = shipping + product.shipping;
    }

    const vat = ((totalPrice * .1).toFixed(2));
    const grandTotal = totalPrice + shipping + parseFloat(vat);

    return (
        <div className='cart'>
            <h4>Selected Items: {quantity}</h4>
            <p>Total Price: ${totalPrice}</p>
            <p>Shipping: ${shipping}</p>
            <p>Vat: ${vat}</p>
            <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;