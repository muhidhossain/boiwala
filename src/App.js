import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Shop from './Components/Shop/Shop';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Shop></Shop>
    </div>
  );
}

export default App;
