import React from 'react';
import './OrderSummary.css';

const OrderSummary = (props) => {
    const cart = props.cart;

    let subtotal = 0;
    for (let i = 0; i < cart.length; i++) {
        const book = cart[i];
        subtotal = subtotal + parseFloat(book.price) * book.quantity;
    };

    let shipping = 0;
    if(subtotal) {
        shipping = 50;
    }

    let total = 0;
    if (subtotal) {
        total = subtotal + 50;
    }

    return (
        <div className="orderSummary">
            <p>Order Summary</p>
            <div>
                <p>Subtotal:</p><p>{subtotal} TK.</p>
            </div>
            <div>
                <p>Shipping:</p><p>{shipping} TK.</p>
            </div>
            <div>
                <p>Total:</p><p>{total} TK.</p>
            </div>
            <div>
                <p>Payable Total:</p><p>{total} TK.</p>
            </div>
        </div>
    );
};

export default OrderSummary;