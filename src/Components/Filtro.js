import React from 'react';
import Produto from './Produto'
import { Products } from '../style';



export default class Filtro extends React.Component { 
  constructor(props){
    super(props)
    const {price} = this.props.valor
    console.log(price)
  }


   handleChange = (event) => {

    if(event.target.value === "1") {
    let opcao = event.target.value
    this.props.valor.sort(function(a, b){
      if(a.price < b.price) return -1
      if(a.price > b.price) return 1
      return 0;
    })
  }
   else {
    let opcao = event.target.value
    this.props.valor.sort(function(a, b){
      if(a.price > b.price) return -1
      if(a.price < b.price) return 1
      return 0;
    })
  
  

   }
   console.log(this.props.valor)

  }
  render() {


    return (
      <div>

        <select  onChange={this.handleChange}>
          <option value="">Selecione uma opção</option>
          <option value="1">Crescente</option>
          <option value="2">Decrescente</option>
        </select>

      </div>
      
    )
  }
}



    