import React, { useEffect } from "react";

import { styled } from "styles";

const PaymentsPix = ({ afterUpdateForm }) => {
  useEffect(() => {
    afterUpdateForm({});
  }, [afterUpdateForm]);

  return (
    <>
      <Key>Chave do PIX 01: loja@gmail.com</Key>
      <Key>Chave do PIX 02: 21111111111</Key>
    </>
  )
};

const Key = styled.div`
  font-size: 1.2em;
  font-weight: bold;
  margin-top: 10px;
`;

export default PaymentsPix;
