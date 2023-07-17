import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Header } from './components/Header/Header';
import { Introduction } from './components/Introduction/Introduction';
import { Card } from './components/Card/Card';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="wrapper">
      <Navbar/>
      <Header></Header>
      <Introduction></Introduction>
      <div className="popular">
        <h2>What's Popular</h2>
        <div className="row">
          <div className="col-3">
            <Card></Card>
          </div>
          <div className="col-3">
            <Card></Card>
          </div>
          <div className="col-3">
            <Card></Card>
          </div>
          <div className="col-3">
            <Card></Card>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
