import React, { useState, useEffect } from "react";
import { TextField } from '@material-ui/core';

const PaymentsCreditCard = ({ afterUpdateForm }) => {
  const [form, setForm] = useState({
    card: '',
    holderName: '',
    expiryAt: '',
    cvv: '',
  });

  useEffect(() => {
    afterUpdateForm(form);
  }, [form, afterUpdateForm]);

  function updateForm(key, value) {
    setForm({ ...form, [key]: value });
  }

  return (
    <>
      <TextField
        variant="outlined"
        label="Numero do cartão"
        value={form.card}
        onChange={(e) => updateForm('card', e.target.value)}
        style={{ marginTop: '10px', display: 'block' }}
      />
      <TextField
        variant="outlined"
        label="Nome do portador"
        value={form.holderName}
        onChange={(e) => updateForm('holderName', e.target.value)}
        style={{ marginTop: '10px', display: 'block' }}
      />
      <TextField
        variant="outlined"
        label="Validate do cartão"
        value={form.expiryAt}
        onChange={(e) => updateForm('expiryAt', e.target.value)}
        style={{ marginTop: '10px', display: 'block' }}
      />
      <TextField
        variant="outlined"
        label="Cvv"
        value={form.cvv}
        onChange={(e) => updateForm('cvv', e.target.value)}
        style={{ marginTop: '10px', display: 'block' }}
      />
    </>
  )
};

export default PaymentsCreditCard;
