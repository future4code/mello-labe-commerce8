import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  padding: 10px;
  gap: 20px;
  font-family: "Monst Serral";
`;

export const Filter = styled.div`
  display: block;
  grid-column: 1;
  min-height: 60vh;
  border-width: 1px;
  border-style: solid;
  border-color: black;
  border-image: initial;
  padding: 5px;
  max-width: 20vw;
  h2 {
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }

  div {
    margin: 10px 0px;
  }
  input {
    width: 10vw;
  }
`;
export const ProductsQuant = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px 5px 5px 8px;
  height: 25px;
  align-items: center;

  p {
    display: block;
    margin-right: 10px;
  }
`;

export const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

export const Product = styled.div`
  padding: 5px;
  border-width: 1px;
  border-style: dashed;
  border-color: orange;
  border-image: initial;
`;

export const Details = styled.p`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

export const Buy = styled.button`
  color: white;
  width: 100%;
  margin: 0px auto;
  background: black;
  border: unset;
  padding: 10px;
`;
