import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
//import Login from './components/Login';
import Background from './components/Background';


function App() {
  return (
    <div className="App">
      <header className="App-header">       
        <>
        <Navbar className='navbar'/>
        </>
      </header>
      <>
      <Background className="background"/>
      </>
      <div className="cards">
        <>
        <Cards className="card"/>
        <Cards className="card"/>
        </>
      </div>
    </div>
  );
}

export default App;
//xd