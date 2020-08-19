import React, {Component} from 'react';
import './style.css';


class Select extends Component{


  constructor(props){

    super(props);

    this.state = {

      itens:[

        { id: "", text: "Escolha uma unidade"},
        { id: 2, text: "Buritis" },
        { id: 3, text: "sagrada família" },
        { id: 4, text: "Nova Gameleira"}

      ],
      selectItem: 0
    }
    this.MaoSelectItem = this.MaoSelectItem.bind(this);

    console.log(props);
  }

  MaoSelectItem(e){

    this.setState({selectItem: e.target.value});

  }


  render(){

  return(
    <div className="capaForm">

    <span>{this.props.icon}</span>
  
  <select value={this.state.selectItem}  onChange={this.MaoSelectItem} name={this.props.name}>

  

    {

      
            
      this.state.itens.map((item, index) =>(

  
        <option key={index} value={item.id}>{item.text}</option>



      ))
     
    }   

  </select>
  
  </div>

  );
  }
}

export default Select;