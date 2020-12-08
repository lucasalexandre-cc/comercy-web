import React from "react";

import { styled } from "styles";
import { Header, GeneratePurchase } from "components";

const App = () => {
  return (
    <Container>
      <Header />
      <GeneratePurchase />
    </Container>
  )
};

const Container = styled.div`
  padding-bottom: 30px;
`;

export default App;
