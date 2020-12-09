import React, { createContext, useContext, useState } from "react";

export const ClientContext = createContext(null);

const ClientProvider = (props) => {
  const [client, setClient] = useState(null);

  function loadClient(cpf) {
    // TO-DO call backend to find client by cpf

    const defaultClient = {
      id: '111',
      name: "Giorgian De Arrascaeta",
      email: "giorgian@framengo.com.br",
      address: "Barra da Tijuca, RJ",
      cpf: "111.111.111-11",
      personalId: '11.111.111-1'
    };

    setClient(defaultClient);
  }

  return (
    <ClientContext.Provider
      value={{ client, loadClient }}
      {...props}
    />
  );
};

export const useClientContext = () => useContext(ClientContext);

export default ClientProvider;
