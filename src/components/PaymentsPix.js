import React, { useEffect } from "react";

import { styled } from "styles";

const PaymentsPix = ({ afterUpdateForm }) => {
  useEffect(() => {
    afterUpdateForm({});
  }, [afterUpdateForm]);

  return (
    <>
      <Key>Chave do PIX: loja@gmail.com</Key>
    </>
  )
};

const Key = styled.div`
  font-size: 1.2em;
  font-weight: bold;
  margin-top: 10px;
`;

export default PaymentsPix;
