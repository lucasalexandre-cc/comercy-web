import React from "react";
import { AccountCircle } from '@material-ui/icons';

import { styled } from "styles";

const Header = () => {
  return (
    <Container>
      <Content>
        <Title>Sistema da Loja</Title>
        <User>
          Vendedor 1
          <AccountCircle />
        </User>
      </Content>
    </Container>
  )
};

const Container = styled.div`
  width: 100%;
  height: 70px;
  border-bottom: 1px solid #000;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1080px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;
  font-weight: normal;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin: 0 5px;
    font-size: 1.7em;
  }
`;

export default Header;
