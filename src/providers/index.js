import React from "react";

import ClientProvider from "./ClientProvider";
import ItemProvider from "./ItemProvider";

function RootProviders({ children }) {
  return (
    <ClientProvider>
      <ItemProvider>
        {children}
      </ItemProvider>
    </ClientProvider>
  );
}

export { RootProviders, };
