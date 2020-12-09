import React from "react";

import { styled } from "styles";

const Exchange = ({ value }) => (
  <Text>Troco: R$ {value.toFixed(2)}</Text>
);

const Text = styled.div`
  font-size: 1.2em;
  font-weight: bold;
  margin-top: 10px;
`;

export default Exchange;
