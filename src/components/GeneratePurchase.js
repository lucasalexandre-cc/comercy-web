import React, { useState } from "react";
import axios from "axios";

import { styled } from "styles";
import { useClientContext } from "providers/ClientProvider";
import ClientSearch from "./ClientSearch";
import PurchaseProducts from "./PurchaseProducts";
import Payments from "./Payments";
import Exchange from "./Exchange";

const GeneratePurchase = () => {
  const [products, setProducts] = useState([]);
  const [exchange, setExchange] = useState(null);
  const { client } = useClientContext();

  async function submitPayment(form) {
    try {
      const itens = products.reduce((current, product) => {
        return { ...current, [product.codigoDeBarras]: product.quantidade }
      }, {});

      const response = await axios.post('http://ec2-35-171-186-84.compute-1.amazonaws.com:8080/venda', {
        idCliente: client.id,
        itens,
        pagamento: {
          type: form.paymentMethod.key,
          numeroCartao: form.card,
          valorRecebido: parseInt(form.paidAmount) * 100
        }
      });

      const { pagamento } = response.data;
      if (!pagamento) return alert("Erro no pagamento");

      setExchange(pagamento.troco / 100);
      alert("Pagamento efetuado");
    } catch (e) {
      alert("Erro no pagamento");
      console.log(e);
    }
  }

  return (
    <Container>
      <ClientSearch client={client} />

      {client && <PurchaseProducts updateProducts={setProducts} />}

      {products.length > 0 && <Payments submitPayment={submitPayment} />}

      {exchange > 0 && <Exchange value={exchange} />}
    </Container>
  )
};

const Container = styled.div`
  width: 1080px;
  max-width: 95%;
  margin: 40px auto 0 auto;
`;

export default GeneratePurchase;
