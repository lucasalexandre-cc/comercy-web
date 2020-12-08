import React from "react";

import ClientProvider from "./ClientProvider";

function RootProviders({ children }) {
  return (
    <ClientProvider>{children}</ClientProvider>
  );
}

export { RootProviders, };
