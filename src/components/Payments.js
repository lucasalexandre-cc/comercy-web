import React, { useState, useEffect } from "react";
import { TextField, Button } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

import { styled } from "styles";
import PaymentsMoney from "./PaymentsMoney";
import PaymentsPix from "./PaymentsPix";
import PaymentsCreditCard from "./PaymentsCreditCard";

const Payments = () => {
  const [paymentMethod, setPaymentsMethod] = useState(null);
  const [paymentForm, setPaymentForm] = useState(null);

  useEffect(() => {
    setPaymentForm(null);
  }, [paymentMethod]);

  return (
    <>
      <StepTitle>Pagamento:</StepTitle>
      <Autocomplete
        style={{ width: 300 }}
        options={allPaymentMethod}
        value={paymentMethod}
        onChange={(_, newValue) => setPaymentsMethod(newValue)}
        getOptionLabel={(paymentMethod) => paymentMethod.name}
        renderInput={(params) => (
          <TextField {...params} label="Escolha a forma de pagamento" variant="outlined" margin="normal" />
        )}
      />

      {paymentMethod && paymentMethod.id === 1 && <PaymentsMoney afterUpdateForm={setPaymentForm} />}
      {paymentMethod && paymentMethod.id === 2 && <PaymentsPix afterUpdateForm={setPaymentForm} />}
      {paymentMethod && paymentMethod.id === 3 && <PaymentsCreditCard afterUpdateForm={setPaymentForm} />}

      {paymentForm &&
        <CustomButton
          variant="contained"
        >
          Finalizar compra
        </CustomButton>
      }
    </>
  )
};

const allPaymentMethod = [
  { id: 1, name: 'Dinheiro' },
  { id: 2, name: 'Pix' },
  { id: 3, name: 'Cartão de Crédito' },
  { id: 4, name: 'Cartão de Débito' }
];

const StepTitle = styled.h1`
  font-weight: normal;
  font-size: 1.5em;
  text-decoration: underline;
`;

const CustomButton = styled(Button)`
  &.MuiButtonBase-root {
    display: block;
    margin-top: 20px;
  }
`;

export default Payments;
