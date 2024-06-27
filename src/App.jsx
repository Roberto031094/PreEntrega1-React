import React from 'react';
import "./App.css";
import Header from './components/Header';
import NavBar from "./components/NavBar";
import Renderizado from './components/ItemListContainer'; 
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Renderizado />
      <Footer />
    </>
  )
}


export default App;
