import React, { createContext, useState, useEffect } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Shop from './Components/Shop/Shop';
import SecondaryNav from './Components/SecondaryNav/SecondaryNav';
import Footer from './Components/Footer/Footer';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Cart from './Components/Cart/Cart';
import Login from './Components/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getDatabaseCart } from './Components/LocalStorageManager/LocalStorageManager';
import SignUp from './Components/SignUp/SignUp';
import Auth from './Components/Login/use-auth';
import EmailVerification from './Components/VerifyEmail/VerifyEmail';
import Loading from './Components/Loading/Loading';
import Shipment from './Components/Shipment/Shipment';

export const AllBooksContext = createContext();
export const CartContext = createContext();
export const LoadingContext = createContext();
export const AuthContext = createContext();

function App() {
  const [cart, setCart] = useState([])
  const [allBooks, setAllBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loading1, setLoading1] = useState(true);
  const [emailVerified, setEmailVerified] = useState();
  const auth = Auth();

  useEffect(() => {
    if (auth.user) {
      setEmailVerified(auth.user.emailVerified);
      setLoading1(false);
    }
    else {
      setTimeout(() => {setLoading1(false)}, 2000)
    }
  }, [auth.user]);

  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);
    if (allBooks.length) {
      const previousCart = productKeys.map(existingKey => {
        const book = allBooks.find(book => book._id === existingKey);
        book.quantity = savedCart[existingKey];
        return book;
      })
      setCart(previousCart);
    }
  }, [allBooks, setCart])

  useEffect(() => {
    fetch("https://boiwala.herokuapp.com/allBooks")
      .then(res => res.json())
      .then(data => {
        const fetchedData = data.reverse()
        setAllBooks(fetchedData);
        setLoading(false);
      });
  }, []);


  let routs;
  if (loading1) {
    routs = (
      <Switch>
        <Route path="/login">
          <Loading></Loading>
        </Route>
        <Route path="/signUp">
          <Loading></Loading>
        </Route>
      </Switch>
    )
  }
  else if (!auth.user) {
    routs = (
      <Switch>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/signUp">
          <SignUp></SignUp>
        </Route>
      </Switch>
    )
  }
  else if (auth.user && !emailVerified) {
    routs = (
      <Switch>
        <Route path="/login">
          <EmailVerification></EmailVerification>
        </Route>
        <Route path="/signUp">
        <EmailVerification></EmailVerification>
        </Route>
      </Switch>
    )
  }
  else if (auth.user && emailVerified) {
    routs = (
      <Switch>
        <Route path="/login">
          <NavBar></NavBar>
          <SecondaryNav></SecondaryNav>
          <Shop></Shop>
          <Footer></Footer>
        </Route>
        <Route path="/signUp">
          <NavBar></NavBar>
          <SecondaryNav></SecondaryNav>
          <Shop></Shop>
          <Footer></Footer>
        </Route>
      </Switch>
    )
  }

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
                <Route path="/shipment">
                  <NavBar></NavBar>
                  <SecondaryNav></SecondaryNav>
                  <Shipment></Shipment>
                  <Footer></Footer>
                </Route>
              </Switch>
              {routs}
            </Router>
          </AllBooksContext.Provider>
        </CartContext.Provider>
      </LoadingContext.Provider>
    </div>
  );
}

export default App;
