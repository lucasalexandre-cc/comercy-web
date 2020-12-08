import React, { useState, useEffect } from "react";
import { TextField, Button } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

import { styled } from "styles";

const PurchaseProducts = ({ updateProducts }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedProductQuantity, setSelectedProductQuantity] = useState(1);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    updateProducts(products);
  }, [products, updateProducts]);

  function addNewProduct() {
    if (!selectedProduct) {
      alert("Selecione um produto");
      return;
    }

    setProducts([...products, { ...selectedProduct, quantity: selectedProductQuantity }]);
    setSelectedProduct(null);
    setSelectedProductQuantity(1);
  }

  return (
    <>
      <StepTitle>Adicionar produtos:</StepTitle>
      <Inline>
        <Autocomplete
          style={{ width: 300 }}
          options={allProducts}
          value={selectedProduct}
          onChange={(_, newValue) => setSelectedProduct(newValue)}
          getOptionLabel={(product) => product.name}
          renderInput={(params) => (
            <TextField {...params} label="Escolha o produto" variant="outlined" margin="normal" />
          )}
        />
        {selectedProduct &&
          <>
            <TextField
              variant="outlined"
              label="Quantidade"
              type="number"
              value={selectedProductQuantity}
              onChange={(e) => setSelectedProductQuantity(e.target.value)}
              style={{ marginLeft: '10px', position: 'relative', top: '4px' }}
            />
            <CustomButton
              variant="contained"
              onClick={() => addNewProduct()}
            >
              adicionar
            </CustomButton>
          </>
        }
      </Inline>
      {products.map((product, index) => (
        <Product key={index}>
          {product.name} - Unidades: {product.quantity} - Valor: R$ {calculatePrice(product)}
        </Product>
      ))}
      {products.length > 0 && <Total>Total: {calculateTotalPrice(products)}</Total>}
    </>
  )
};

// TO-DO get products from backend
const allProducts = [
  { id: 1, name: 'Camisa 1 Flamengo', price: 199.90 },
  { id: 2, name: 'Camisa 2 Flamengo', price: 149.90 },
  { id: 3, name: 'Short 1 Flamengo', price: 99.90 },
];

function calculatePrice(product) {
  const result = parseFloat(product.price) * parseInt(product.quantity);
  return result.toFixed(2);
}

function calculateTotalPrice(products) {
  const result = products.reduce((total, product) => total + parseFloat(calculatePrice(product)), 0);
  return result.toFixed(2);
}

const StepTitle = styled.h1`
  font-weight: normal;
  font-size: 1.5em;
  text-decoration: underline;
`;

const Inline = styled.div`
  display: flex;
  align-items: center;
`;

const CustomButton = styled(Button)`
  &.MuiButtonBase-root {
    margin-left: 10px;
  }
`;

const Product = styled.div`
  margin-top: 5px;
`;

const Total = styled.div`
  margin-top: 10px;
  font-weight: bold;
`;

export default PurchaseProducts;
