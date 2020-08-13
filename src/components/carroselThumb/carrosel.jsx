import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import T_11 from '../../assets/imges/t11.png';
function Carrosell(){

return(
<div>
            
                <Carousel autoPlay interval="2000" transitionTime="1000">
                    <div>
                        <img src={T_11} />
                        <p className="legend">My Classic Still 1</p>
                    </div>
                    <div>
                    <img src={T_11} />
                        <p className="legend">My Classic Still 2</p>
                    </div>
                    <div>
                    <img src={T_11} />
                        <p className="legend">My Classic Still 3</p>
                    </div>
                </Carousel>
            </div>

);

}
export default Carrosell;