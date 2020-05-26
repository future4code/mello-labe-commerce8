import React from 'react';




export class Filtro extends React.Component {
    render() {

      return (
        <div className='Filter-container'>
          <h3>Filtro</h3>
            
            <p>Valor Mínimo  
                <select>
                    <option>5,00</option>
                    <option>10,00</option>
                    <option>15,00</option>
                    <option>20,00</option>
                    <option>25,00</option>
                </select> 
                <input></input>
             </p>
             
             <p>Valor Máximo
                <select>
                    <option>5,00</option>
                    <option>10,00</option>
                    <option>15,00</option>
                    <option>20,00</option>
                    <option>25,00</option>
                </select> 
                <input></input>
             </p>
            <p>Buscar Produto
                <input></input>
             </p>  
    


        </div>
      );

    }

  
}

export default Filtro;