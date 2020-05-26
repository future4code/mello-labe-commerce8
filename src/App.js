import React from 'react';
import './App.css';
import Produto from './components/Produto';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Produto
          imagemProduto={'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Iss-expedition_13-launch.jpg/1200px-Iss-expedition_13-launch.jpg'}
          nomeProduto={'Foguete Espacial'}
          precoProduto={'100.000.000'}
        />
      </div>
    );
  }
}

export default App;
