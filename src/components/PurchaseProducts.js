import React, { useState, useEffect } from "react";
import { TextField, Button } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

import { styled } from "styles";
import { useItemContext } from "providers/ItemProvider";

const PurchaseProducts = ({ updateProducts }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedProductQuantity, setSelectedProductQuantity] = useState(1);
  const [chart, setChart] = useState([]);
  const { items, loadItems } = useItemContext();

  useEffect(() => {
    if (!items || items.length === 0) loadItems();
  }, []);

  useEffect(() => {
    updateProducts(chart);
  }, [chart, updateProducts]);

  function addNewProduct() {
    if (!selectedProduct) {
      alert("Selecione um produto");
      return;
    }

    const newChart = chart.filter(product => product.id !== selectedProduct.id);
    const currentProduct = chart.find(product => product.id === selectedProduct.id);
    const currentQuantity = currentProduct && currentProduct.quantidade || 0;

    setChart([...newChart, { ...selectedProduct, quantidade: currentQuantity + parseInt(selectedProductQuantity) }]);
    setSelectedProduct(null);
    setSelectedProductQuantity(1);
  }

  return (
    <>
      <StepTitle>Adicionar produtos:</StepTitle>
      <Inline>
        <Autocomplete
          style={{ width: 300 }}
          options={items}
          value={selectedProduct}
          onChange={(_, newValue) => setSelectedProduct(newValue)}
          getOptionLabel={(item) => item.descricao}
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
      {chart.map((product, index) => (
        <Product key={index}>
          {product.descricao} - Unidades: {product.quantidade} - Valor: R$ {calculatePrice(product)}
        </Product>
      ))}
      {chart.length > 0 && <Total>Total: {calculateTotalPrice(chart)}</Total>}
    </>
  )
};

function calculatePrice(product) {
  const result = parseFloat(product.preco) * parseInt(product.quantidade);
  return (result / 100).toFixed(2);
}

function calculateTotalPrice(products) {
  const result = products.reduce((total, product) => total + parseInt(calculatePrice(product)), 0);
  return (result).toFixed(2);
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
