import React from 'react';
import './style.css';
import Iconfone from '../../assets/imges/Grupo 45.png';

function Form(){

return(

<section className="holderForm">


<div className="styleForm">

  <div className="seguraTitle">
    
    <img src={Iconfone} alt=""/>

    <div className="seguraTxtTitleForm">
    <small>Slicitar</small>
    <h2>Contato</h2>
    </div>
  </div>

  <form action="">
    <input type="text"/>
    <input type="text"/>
    <input type="text"/>
    <input type="text"/>
    <input type="text"/>
  </form>

</div>


</section>

);
}
export default Form;