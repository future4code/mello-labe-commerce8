import React from "react";
import { Filter, Container, ProductsQuant, Products, Product } from "./style";

import Produto from "./components/Produto";

const randomicUser = Math.floor(Math.random() * 10);

const products = [
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
];

function App() {
  return (
    <>
      <ProductsQuant>
        <p>Quantidade de produtos: {products.length}</p>
        <select name="" id="">
          <option value="cresc">Preço:Crescente</option>
          <option value="desc">Preço:Decrescente</option>
        </select>
      </ProductsQuant>
      <Container>
        <Filter>
          <div>
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
              <input type="text" />
            </div>
          </div>
        </Filter>

        <Products>
          {products.map((product) => (
            <Product>
              <Produto
                imagemProduto={product.img}
                nomeProduto={product.name}
                precoProduto={product.price}
                onClickBotaoComprar={() => {}}
              />
            </Product>
          ))}
        </Products>
      </Container>
    </>
  );
}

export default App;
