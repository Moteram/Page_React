import React from  'react';
import './style.css';
import Arcord from '../../assets/imges/car1.png';
import City from '../../assets/imges/car2.png';
import Fity from '../../assets/imges/car3.png';

import Modelos from './boxCar';

function GruposCarros(){

  return(
    <div className="blocosDeCarros">
      <section className="center">
      <div className="holderModel">
<div className="conteudoGrupocarros">        

<h2>PRONTO PARA TER UM HONDA?</h2>

        <legend>Conheça os últimos grandes lançamentos da Honda.</legend>
        
        <div className="seguraModelos">

       <Modelos caminho={Arcord} txt="Novo Honda Accord: 
       a combinação perfeita de 
       três atributos exigidos pelo 
       consumidor: 
       elegância, luxo e alto desempenho. "/>


<Modelos caminho={City} txt="O City está muito mais moderno e esportivo. Com design único e mais tecnológico do que nunca, ele vai conquistar todos os olhares. "/>


<Modelos caminho={Fity} txt="Com seu design inconfundível, o novo Honda Fit traz novidades que vão surpreender a todos e atrair ainda mais fãs."/>
        
</div>
        </div>

        </div>
      </section>
    </div>
  );

}
export default GruposCarros;