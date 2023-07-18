import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Header } from './components/Header/Header';
import { Introduction } from './components/Introduction/Introduction';
import { Card } from './components/Card/Card';
import { Footer } from './components/Footer/Footer';
import { MovieCard } from './components/Card/components/MovieCard/MovieCard';
import { Legacy } from './components/Legacy/Legacy';
import { Slider } from './components/Slider/Slider';

function App() {
  return (
    <div className="wrapper">
      <Navbar/>
      <Header></Header>
      <Introduction></Introduction>
      <Slider></Slider>
      <Footer></Footer>
    </div>
  );
}

export default App;
