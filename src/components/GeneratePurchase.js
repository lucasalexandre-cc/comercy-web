import React, { useState } from "react";

import { styled } from "styles";
import { useClientContext } from "providers/ClientProvider";
import ClientSearch from "./ClientSearch";
import PurchaseProducts from "./PurchaseProducts";
import Payments from "./Payments";

const GeneratePurchase = () => {
  const [products, setProducts] = useState([]);
  const { client } = useClientContext();

  return (
    <Container>
      <ClientSearch client={client} />

      {client && <PurchaseProducts updateProducts={setProducts} />}

      {products.length > 0 && <Payments />}
    </Container>
  )
};

const Container = styled.div`
  width: 1080px;
  max-width: 95%;
  margin: 40px auto 0 auto;
`;

export default GeneratePurchase;
