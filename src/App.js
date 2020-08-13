import React from 'react';
import './assets/styles/global.css';
import Header from './components/header';
import Banner from './components/banner';
import MainThumbBanner from './components/carroselThumb';
import BannerPainel from './components/bannerPainel';
import GrupoCarros from './components/Grupo_carros';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <MainThumbBanner />
      <BannerPainel />
      <GrupoCarros />
      <Footer />


    </div>
  );
}

export default App;
