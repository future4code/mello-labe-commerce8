import React from "react";
import {
  Filter,
  Container,
  ProductsQuant,
  Products,
  Product,
  Details,
  Buy, 
} from "./style";
import Filtro from './components/Filtro'

const randomicUser = Math.floor(Math.random() * 10);

   

class App extends React.Component {

  state = {
    products: [
 {
   name: "Item E",
   price: 40.5,
   img: `https://source.unsplash.com/collection/${randomicUser}/200x200`,
 },
 {
   name: "Item B",
   price: 55.9,
   img: `https://i.picsum.photos/id/${randomicUser + 1}/200/200.jpg`,
 },
 {
   name: "Item D",
   price: 80.0,
   img: `https://i.picsum.photos/id/${randomicUser + 2}/200/200.jpg`,
 },
 {
   name: "Item C",
   price: 99.0,
   img: `https://i.picsum.photos/id/${randomicUser + 3}/200/200.jpg`,
 },
 {
   name: "Item A",
   price: 199.99,
   img: `https://i.picsum.photos/id/${randomicUser + 4}/200/200.jpg`,
 },
 {
   name: "Item H",
   price: 210.0,
   img: `https://i.picsum.photos/id/${randomicUser + 5}/200/200.jpg`,
 },
 {
   name: "Item F",
   price: 499.99,
   img: `https://i.picsum.photos/id/${randomicUser + 6}/200/200.jpg`,
 },
 {
   name: "Item G",
   price: 501.0,
   img: `https://i.picsum.photos/id/${randomicUser + 7}/200/200.jpg`,
 },
]
  };



  componentDidUpdate () {}
  
comparaProduto = event => {
    this.state.products.filter(produto => {
      if(produto.name === event.target.value)
        return event.target.value
    })  
  }
 render() {
  return (
    <Container>
      <ProductsQuant>
        Quantidade de produtos: {this.state.products.length}
        <select name="" id="">
          <option value="cresc">Preço:Crescente</option>
          <option value="desc">Preço:Decrescente</option>
        </select>
      </ProductsQuant>
      <Filter>
        <div>
          <Filtro valor={this.products}/>
          <h2>Filtros:</h2>
          <div>
            <label>Valor Minimo:</label>
            <input type="text" />
          </div>
          <div>
            <label>Valor Maximo:</label>
            <input type="text" />
          </div>
          <div>
            <label>Buscar Produto:</label>
            <input onChange={this.comparaProduto} type="text" />
          </div>
        </div>
      </Filter>
      <Products>
        {this.state.products.map((product) => (
          <Product>
            <img src={product.img} />
            <Details>{product.name}</Details>
            <Details>R$ {product.price}</Details>
            <Buy onClick={() => {}}>Adicionar ao Carrinho</Buy>
          </Product>
        ))}
      </Products>
    </Container>
  );

}
}
export default App;

