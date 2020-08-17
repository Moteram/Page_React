import React from 'react';
import './style.css';


function Input(props){

  return(
    <div className="capaForm">
    <span>{props.icon}</span>
  <input type={props.type} name={props.name} required placeholder={props.placeholder}/>
  </div>

  );
}

export default Input;