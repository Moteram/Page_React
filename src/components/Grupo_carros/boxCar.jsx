import React from "react";


function BoxCar(pega){


  return(

    <div className="modelos">
          <div className="model">
            <img src={pega.caminho} alt=""/>
            <p>
            {pega.txt}
              </p>
              <button>conheça mais</button>
          </div>
        </div>
  );

}
export default BoxCar;