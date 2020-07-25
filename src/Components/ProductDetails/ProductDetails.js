import React from 'react';
import './ProductDetails.css';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { AllBooksContext } from '../../App';
import { Button } from '@material-ui/core';

const ProductDetails = () => {
    const allBooks = useContext(AllBooksContext)
    const { id } = useParams();
    console.log(allBooks);

    const book = allBooks.filter(book => book._id === id)
    console.log(book);

    return (
        <div className="productDetails">
            {
                book.map((book) => (
                    <div key={book._id} className="productDetailsInfo">
                        <img src={book.image} alt="" />
                        <div>
                            <h4 style={{ color: "#498EC5" }}>{book.title}</h4>
                            <p>by {book.author}</p>
                            <p>Category: {book.category}</p>
                            <h4>Price: {book.price}</h4>
                            <h4>Discount Price: {book.discountPrice}</h4>
                            <p style={{ color: "green" }}>Stock (Only {book.stock} copies left)</p>
                            <Button className="addToCartBtn">Add to Cart</Button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default ProductDetails;