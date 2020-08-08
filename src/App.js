import React, { createContext, useState, useEffect } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Shop from './Components/Shop/Shop';
import 'bootstrap/dist/css/bootstrap.min.css';
import SecondaryNav from './Components/SecondaryNav/SecondaryNav';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Cart from './Components/Cart/Cart';
import { getDatabaseCart } from './Components/LocalStorageManager/LocalStorageManager';

export const AllBooksContext = createContext();
export const CartContext = createContext();
export const LoadingContext = createContext();

function App() {
  const [cart, setCart] = useState([])
  const [allBooks, setAllBooks] = useState([]);
  const [loading, setLoading] = useState(true);

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
  }, [allBooks, setCart])

  useEffect(() => {
    fetch("http://localhost:4000/allBooks")
      .then(res => res.json())
      .then(data => {
        const fetchedData = data.reverse()
        setAllBooks(fetchedData);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <LoadingContext.Provider value={loading}>
        <CartContext.Provider value={[cart, setCart]}>
          <AllBooksContext.Provider value={allBooks}>
            <Router>
              <Switch>
                <Route exact path="/">
                  <NavBar></NavBar>
                  <SecondaryNav></SecondaryNav>
                  <Shop></Shop>
                  <Footer></Footer>
                </Route>
                <Route path="/productDetails/:id">
                  <NavBar></NavBar>
                  <SecondaryNav></SecondaryNav>
                  <ProductDetails></ProductDetails>
                  <Footer></Footer>
                </Route>
                <Route path="/cart">
                  <NavBar></NavBar>
                  <SecondaryNav></SecondaryNav>
                  <Cart></Cart>
                  <Footer></Footer>
                </Route>
              </Switch>
            </Router>
          </AllBooksContext.Provider>
        </CartContext.Provider>
      </LoadingContext.Provider>
    </div>
  );
}

export default App;
