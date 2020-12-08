import React, { useState, useEffect } from "react";
import { TextField } from '@material-ui/core';

const PaymentsMoney = ({ afterUpdateForm }) => {
  const [form, setForm] = useState({
    paidAmount: 0,
  });

  useEffect(() => {
    afterUpdateForm(form);
  }, [form, afterUpdateForm])

  function updateForm(key, value) {
    setForm({ ...form, [key]: value });
  }

  return (
    <>
      <TextField
        variant="outlined"
        label="Valor pago pelo cliente"
        value={form.paidAmount}
        type="number"
        onChange={(e) => updateForm('paidAmount', e.target.value)}
        style={{ marginTop: '10px' }}
      />
    </>
  )
};

export default PaymentsMoney;
