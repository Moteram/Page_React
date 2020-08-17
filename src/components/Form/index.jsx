import React from 'react';
import './style.css';
import Iconfone from '../../assets/imges/Grupo 45.png';
import Input from './Inputs';
import {RiUser3Line, RiCommunityLine, RiMailLine, RiPhoneLine, RiTimeLine} from 'react-icons/ri';
import Select from './Select';

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

    <Input icon={<RiUser3Line size={21}/>} type="text" name="nome" placeholder="Nome:"/>
    <Input icon={<RiMailLine size={21}/>} type="email" name="email" placeholder="Email:"/>
    <Input icon={<RiPhoneLine size={21}/>} type="text" name="tel" placeholder="Telefone:"/>
    <Input icon={<RiTimeLine size={21}/>} type="time" name="horario" placeholder="Escolha o horario:"/>
    < Select icon={<RiCommunityLine size={21}/>} />
    <button className="buttonAgendar" type="submit">AGENDAR UMA VISITA</button>
  </form>

</div>


</section>

);
}
export default Form;
