import React from 'react';
import './style.css';

import LogiIconfooterBam from '../../assets/imges/logo.png';
import Selo from '../../assets/imges/selo.png';
import { AiFillEnvironment } from 'react-icons/ai';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';

function Footer(){


  return(
    <footer>

      <div className="barraCinzaFooter">

    <section className="center pareteCenter">

      <div className="conteudoLInks">

        

          <a className="linkE" href="">
            <span>< AiFillEnvironment size={40}/></span>
            <p>Encontre uma</p>
            <h4>CONCESSIONÁRIA</h4>
          </a>

        
        <a className="linkD" href="">
       
            <p>CENTRAL DE ATENDIMENTO</p>
            <h4>(31) 3123-1234</h4>

        </a>

      </div>

      <div className="seguraconteudoRedes">

      <h5 className="th5">SIGA A BANZAI NAS REDES SOCIAIS</h5>

      <ul className="redes">

         <li><a href=""><span><FiFacebook /></span></a></li>
         <li><a href=""><span><FiInstagram /></span></a></li>
         <li><a href=""><span><FiTwitter /></span></a></li>

        </ul>


      </div>
    

    </section>
    </div>


    <div className="barraBrancaFooter">

      <sectin className="center">

      <div className="seguraIcomLogo">
        <img src={LogiIconfooterBam} alt=""/>
      </div>

      <div className="seguraTxtIMg">
        <small>Todos juntos fazem um trânsito melhor</small>
        <img src={Selo} alt=""/>

      </div>

      </sectin>


    </div>

    </footer>
  );
}
export default Footer;