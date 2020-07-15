import React from 'react';
import './RecentSoldProducts.css'
import { Card, CardDeck } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import bookImg1 from '../../images/books/107015117_1329601220579453_4397954717437509324_n (1).jpg';
import bookImg2 from '../../images/books/108212474_1334590470080528_8955743467452577924_n (1).jpg';
import bookImg3 from '../../images/books/70154887_1100623743477203_6931326820532879360_o (1).jpg';
import bookImg4 from '../../images/books/71742012_1101460366726874_6291763897615515648_o (1).jpg';
import bookImg5 from '../../images/books/72307564_1108360862703491_4770733927323140096_o (1).jpg';
import bookImg6 from '../../images/books/83137574_1326634830876092_3376508098199577758_o (1).jpg';

const RecentSoldProducts = () => {
    
    return (
        <div className="recentSoldProducts">
            <div className="cardHead">
                <h4>Recently Sold Products</h4>
                <p>View more</p>
            </div>
            <CardDeck>
                <Card className="card">
                    <Card.Img className="cardImage" variant="top" src={bookImg1} />
                    <Card.Body>
                        <Card.Title>MURAKAMI</Card.Title>
                        <Card.Text>
                            Author
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button className="addToCartBtn">Add to Cart</Button>
                    </Card.Footer>
                </Card>
                <Card className="card">
                    <Card.Img className="cardImage" variant="top" src={bookImg2} />
                    <Card.Body>
                        <Card.Title>The Productive Muslim</Card.Title>
                        <Card.Text>
                            Author
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button className="addToCartBtn">Add to Cart</Button>
                    </Card.Footer>
                </Card>
                <Card className="card">
                    <Card.Img className="cardImage" variant="top" src={bookImg3} />
                    <Card.Body>
                        <Card.Title>THE VINCE CODE</Card.Title>
                        <Card.Text>
                            Dan Brown
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button className="addToCartBtn">Add to Cart</Button>
                    </Card.Footer>
                </Card>
                <Card className="card">
                    <Card.Img className="cardImage" variant="top" src={bookImg4} />
                    <Card.Body>
                        <Card.Title>The Kite Runner</Card.Title>
                        <Card.Text>
                            Author
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button className="addToCartBtn">Add to Cart</Button>
                    </Card.Footer>
                </Card>
                <Card className="card">
                    <Card.Img className="cardImage" variant="top" src={bookImg5} />
                    <Card.Body>
                        <Card.Title>Verity</Card.Title>
                        <Card.Text>
                            Author
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button className="addToCartBtn">Add to Cart</Button>
                    </Card.Footer>
                </Card>
                <Card className="card">
                    <Card.Img className="cardImage" variant="top" src={bookImg6} />
                    <Card.Body>
                        <Card.Title>মেঘ রোদ্দুর বৃষ্টি</Card.Title>
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