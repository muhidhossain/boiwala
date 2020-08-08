import React from 'react';
import './Cart.css';
import { useContext } from 'react';
import { CartContext, LoadingContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { removeFromDatabaseCart } from '../LocalStorageManager/LocalStorageManager';
import emptyCart from '../../images/cart/empty-cart.png'
import { Button, Spinner } from 'react-bootstrap';

const Cart = () => {
    const [cart, setCart] = useContext(CartContext);
    const loading = useContext(LoadingContext)
    const [id, setId] = useState(null);

    console.log(loading);

    const handleRemove = () => {
        const newCart = cart.filter(book => book._id !== id);
        setCart(newCart);
        removeFromDatabaseCart(id);
    }

    return (
        <div className="cart">
            {
                loading ?
                    <div>
                        <Button
                            style={{
                                margin: "215px 0",
                                fontWeight: "800",
                                padding: "10px 40px",
                                backgroundColor: "#498EC5"
                            }}
                            variant="primary" disabled>
                            <Spinner
                                as="span"
                                animation="grow"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                            <span> Loading...</span>
                        </Button>
                    </div> :
                    <div>
                        {
                            cart[0] ?
                                <div>
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
                                                    style={{ color: "red", cursor: "pointer" }}
                                                    icon={faTimes}
                                                />
                                            </div>
                                        ))
                                    }
                                </div> :
                                <div className="emptyCart">
                                    <div>
                                        <img src={emptyCart} alt="" />
                                        <h4>Your Cart is Empty. <a href="/">Continue Shopping</a></h4>
                                    </div>
                                </div>
                        }
                    </div>
            }

        </div>
    );
};

export default Cart;