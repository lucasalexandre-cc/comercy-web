import React, { createContext, useContext, useState } from "react";
import axios from "axios";

export const ItemContext = createContext(null);

const ItemProvider = (props) => {
  const [items, setItems] = useState([]);

  async function loadItems() {
    try {
      const response = await axios.get('http://ec2-54-242-33-175.compute-1.amazonaws.com:8080/item');
      setItems(response.data);
    } catch (e) {
      alert("Erro ao carregar os itens");
    }
  }

  return (
    <ItemContext.Provider
      value={{ items, loadItems }}
      {...props}
    />
  );
};

export const useItemContext = () => useContext(ItemContext);

export default ItemProvider;
