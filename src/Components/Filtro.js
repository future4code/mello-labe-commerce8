import React from 'react';



export class Filtro extends React.Component {

        state = {

            listaDeProdutos: [
            
               { 
                id: 1,
                name: 'foguete',
                value: '1000',
                imageUrl: ''

               },

               { 
                id: 2,
                name: 'nave',
                value: '500',
                imageUrl: ''

               },

            ],

            inputValorMinimo: [ {

              valorMin: ''

            }
            ],

            inputValorMaximo: [ {

              valorMax: ''

            }

            ]
        };
    
  }

  const novoValorMaximo = [...this.state.inputValorMaximo, novoValorMax]

  this.setState({inputValorMaximo : novoValorMaximo})
  
  const novoValorMinimo = [...this.state.inputValorMinimo, novoValorMin]

  this.setState({inputValorMinimo : novoValorMinimo})

  

  comparaProduto = (produtoDigitado) => {
    const novaListaDeProdutos = this.state.listaDeProdutos.filter(produto => {
      return produto.name === produtoDigitado
    })
      this.setState({ listaDeProdutos : novaListaDeProdutos
    })
        }

    render() {
      const produtoRenderizado = this.state.novaListaDeProdutos.filter (produto => {
        const chamaComparaProduto = () => {
          this.comparaProduto(produto.name)
      }
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
                <input onChange={chamaComparaProduto}></input>
             </p>  
    


        </div>
       )
    }