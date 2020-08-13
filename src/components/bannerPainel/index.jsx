import React from 'react';

import './style.css';

import Pai11 from '../../assets/imges/pai11.png';
import Pai3 from '../../assets/imges/pai11.png';
import Pai2 from '../../assets/imges/pai11.png';
import BannerPainelRotativo from './banner';

function BannerPainel(){

  return(
   <div className="seguraTotalBannerPainel">

    

       <div className="conteinerBannerPainel">

         <div className="seguraIMGGrande">

           <BannerPainelRotativo />

         </div>

      
       </div>

    

   </div> 

  );

}

export default BannerPainel;