import React from 'react';
import './style.css';
import Logo from '../../assets/imges/logo.png'
import { AiFillHome, AiFillEnvironment, AiFillMail } from 'react-icons/ai';

import FormFlutuante from '../../components/Form';

function Header(){

return(
  <header>

<div className="barraCinza">

  <div className="center">

    <FormFlutuante />

    <div className="grade">

    <button className="iconHouse">
      <span className="pq"><AiFillHome size={20}/></span>
      <span className="gr"><AiFillHome size={30}/></span>
      <legend>ir para o portal banzai</legend>
    </button>

   <div className="seguraDois">

    <button className="local">
      <span className="pq"><AiFillEnvironment size={20} /></span>
      <span className="gr"><AiFillEnvironment size={30}/></span>
      <legend>encontre sua concesonaria</legend>
    </button>

    <button className="falar">
     <span className="pq">< AiFillMail size={20}/></span>
     <span className="gr"><AiFillMail size={30}/></span>
      <legend>fale conosco</legend>

    </button>

    </div>

    </div>



  </div>

</div>

<div className="barraBranca">
  <div className="center">
    <div className="gradeBarraBranca">

      <div className="logoTopo">

        <img src={Logo} alt=""/>

      </div>

      <div className="contatobarraBranca">

        <button className="txtcentral">central de atendimento </button>

        <button className="fone">31 99954123</button>


      </div>

    </div>

  </div>
</div>

  </header>
);

}
export default Header;