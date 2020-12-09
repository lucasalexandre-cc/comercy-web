import React, { useState, useEffect } from "react";
import { TextField } from '@material-ui/core';

const PaymentsDebitCard = ({ afterUpdateForm }) => {
  const [form, setForm] = useState({
    card: '',
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
    </>
  )
};

export default PaymentsDebitCard;
