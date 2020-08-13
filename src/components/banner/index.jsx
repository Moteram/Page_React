import React from 'react';
import './style.css';
import BannerIMG from '../../assets/imges/banner1-1.png'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/styles.css';


function Banner(definisoes){

  const AutoplaySlider = withAutoplay(AwesomeSlider);

  const slider = (

<AutoplaySlider play={true} interval={5000} animation="cubeAnimation" > 

  <div data-src={BannerIMG} />
  <div data-src={BannerIMG} />

  
</AutoplaySlider>



  )

  return(
    <div className="banner">      

      {slider}
     
    </div>

  );

}
export default Banner