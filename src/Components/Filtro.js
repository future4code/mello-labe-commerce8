import React from 'react';




export class Filtro extends React.Component {
    render() {

      return (
        <div className='Filter-container'>
          <h3>Filtro</h3>
            
            <p>Valor Mínimo  
                <input></input>
             </p>
             
             <p>Valor Máximo
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