import React from 'react';
import './Cart.css';
import { useContext } from 'react';
import { CartContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { removeFromDatabaseCart } from '../LocalStorageManager/LocalStorageManager';

const Cart = () => {
    const [cart, setCart] = useContext(CartContext);
    const [id, setId] = useState(null);

    const handleRemove = () => {
        const newCart = cart.filter(book => book._id !== id);
        setCart(newCart);
        removeFromDatabaseCart(id);
    }

    return (
        <div className="cart">
            {
                cart.map((cartItem) => (
                    <div key={cartItem._id} className="cartDetails">
                        <div>
                            <img src={cartItem.image} alt="" />
                            <div className="cartText">
                                <p style={{ fontWeight: "600", color: "#498EC5" }}>{cartItem.title}</p>
                                <small>{cartItem.author}</small>
                                <br />
                                <br />
                                <p>TK. {cartItem.discountPrice}</p>
                            </div>
                        </div>
                        <FontAwesomeIcon 
                            onMouseOver={() => setId(cartItem._id)} 
                            onClick={handleRemove} 
                            style={{ color: "red", cursor: "pointer"}} 
                            icon={faTimes}
                        />
                    </div>
                ))
            }
        </div>
    );
};

export default Cart;