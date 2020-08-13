import React from 'react';
import './style.css';

import T_2 from '../../assets/imges/t2.png';
import T_3 from '../../assets/imges/t3.png';
import T_11 from '../../assets/imges/t11.png';

import Carrossel from './carrosel';

function Carrosel(){

return(
  <main className="mainthumbBanner">

    <section className="center">
      <div className="conteinerThumb">
    <h2>A EMOÇÃO DE DIRIGIR LEVA VOCÊ MAIS LONGE</h2>
    <div className="thumbBanner">
     
      

      <div className="seguraCarroseelMidle">

      

        <div className="thumbGrandE">

        <Carrossel />

        </div>

      </div>

      </div>

      <legend>
        O novo Civic Geração 10 traz um 
        design único mudando a categoria de 
        sedãs para sempre. Ele garante a melhor 
        dirigibilidade com o máximo em sofisticação 
        e conforto, atribuído por seu design interno e
        </legend>

        </div>

    </section>


  </main>
);
};
export default Carrosel;
