import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Shop from './Components/Shop/Shop';
import 'bootstrap/dist/css/bootstrap.min.css';
import SecondaryNav from './Components/SecondaryNav/SecondaryNav';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <SecondaryNav></SecondaryNav>
      <Shop></Shop>
      <Footer></Footer>
    </div>
  );
}

export default App;
