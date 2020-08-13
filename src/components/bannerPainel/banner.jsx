import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/custom-animations/open-animation.css';
import 'react-awesome-slider/dist/styles.css';


import PainelIMG_G from '../../assets/imges/Retângulo 11.png';

function BannerPainelRotativo(){

  const AutoplaySlider = withAutoplay(AwesomeSlider);

  const slider = (

<AutoplaySlider play={false} interval={5000} animation="openAnimation" > 

  <div data-src={PainelIMG_G} />
  <div data-src={PainelIMG_G} />

  
</AutoplaySlider>
  );

  return( <>{slider}</>);

}
export default BannerPainelRotativo