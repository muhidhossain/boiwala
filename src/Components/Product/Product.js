import React, { useContext, useState, useEffect } from 'react';
import './Product.css';
import { CardDeck, Card, Modal } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { AllBooksContext, CartContext } from '../../App';
import { addToDatabaseCart, getDatabaseCart } from '../LocalStorageManager/LocalStorageManager';

const Product = () => {
    const [id, setId] = useState(null);
    const [cart, setCart] = useContext(CartContext);
    const [show, setShow] = useState(false);

    const allBooks = useContext(AllBooksContext);
    const books = allBooks.slice(0, 6);

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        if (allBooks.length) {
            const previousCart = productKeys.map(existingKey => {
                const book = allBooks.find(book => book._id === existingKey);
                return book;
            })
            setCart(previousCart);
        }
    }, [allBooks, show, setCart])

    if (show) {
        return (
            <Modal style={{ marginTop: "80px", color: "red" }} show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>ALready added!</Modal.Title>
                </Modal.Header>
            </Modal>
        );
    }

    const handleAddProduct = () => {
        const book = books.find(book => book._id === id)
        const sameBook = cart.find(book => book._id === id);
        let newCart;
        if (sameBook) {
            setShow(true)
        }
        else {
            newCart = [...cart, book];
        }
        setCart(newCart);
        addToDatabaseCart(id);
    }

    return (
        <div className="product">
            {
                books.map((books) => (
                    <CardDeck className="productInfo" key={books._id}>
                        <Card onMouseOver={() => setId(books._id)} className="card">
                            <Link style={{ textDecoration: "none", color: "black" }} to={"/productDetails/" + id}>
                                <Card.Img variant="top" src={books.image} />
                                <Card.Body className="cardBody">
                                    <p style={{ fontWeight: "800", color: "#498EC5" }}>{books.title}</p>
                                    <small>{books.author}</small>
                                    <p style={{ fontWeight: "700" }}>TK. {books.price}</p>
                                </Card.Body>
                            </Link>
                            <Card.Footer>
                                <Button onClick={() => handleAddProduct()} className="addToCartBtn">Add to Cart</Button>
                            </Card.Footer>
                        </Card>
                    </CardDeck>
                ))
            }
        </div>
    );
};

export default Product;