import React from 'react';
import './RecentSoldProducts.css'
import { CardDeck, Card } from 'react-bootstrap';
import cardImage1 from '../../images/books/MURAKAMI.jpg';
import cardImage2 from '../../images/books/The Kite Runner.jpg';
import cardImage3 from '../../images/books/The Productive Muslim.jpg';
import cardImage4 from '../../images/books/THE VINCE CODE.jpg';
import cardImage5 from '../../images/books/Verity.jpg';
import cardImage6 from '../../images/books/মেঘ রোদ্দুর বৃষ্টি.jpeg';
import { Button } from '@material-ui/core';

const RecentSoldProducts = () => {
    return (
        <div className="recentlySoldProducts">
            <div className="cardHead">
                <h4>Recently Sold Products</h4>
                <p>View more</p>
            </div>
            <CardDeck>
                <Card className="card">
                    <Card.Img variant="top" src={cardImage1} />
                    <Card.Body className="cardBody">
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            Author
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button className="addToCartBtn">Add to Cart</Button>
                    </Card.Footer>
                </Card>
                <Card className="card">
                    <Card.Img variant="top" src={cardImage2} />
                    <Card.Body className="cardBody">
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            Author
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button className="addToCartBtn">Add to Cart</Button>
                    </Card.Footer>
                </Card>
                <Card className="card">
                    <Card.Img variant="top" src={cardImage3} />
                    <Card.Body className="cardBody">
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            Author
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button className="addToCartBtn">Add to Cart</Button>
                    </Card.Footer>
                </Card>
                <Card className="card">
                    <Card.Img variant="top" src={cardImage4} />
                    <Card.Body className="cardBody">
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            Author
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button className="addToCartBtn">Add to Cart</Button>
                    </Card.Footer>
                </Card>
                <Card className="card">
                    <Card.Img variant="top" src={cardImage5} />
                    <Card.Body className="cardBody">
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            Author
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button className="addToCartBtn">Add to Cart</Button>
                    </Card.Footer>
                </Card>
                <Card className="card">
                    <Card.Img variant="top" src={cardImage6} />
                    <Card.Body className="cardBody">
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            Author
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button className="addToCartBtn">Add to Cart</Button>
                    </Card.Footer>
                </Card>
            </CardDeck>
        </div>
    );
};

export default RecentSoldProducts;