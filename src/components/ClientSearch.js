import React, { useState } from "react";
import { TextField, Button } from '@material-ui/core';

import { styled } from "styles";
import { useClientContext } from "providers/ClientProvider";

const ClientSearch = () => {
  const [cpf, setCpf] = useState('');
  const { client, loadClient } = useClientContext();

  return (
    <>
      <StepTitle>Buscar cliente:</StepTitle>
      {!client &&
        <Inline>
          <TextField
            variant="outlined"
            label="CPF do cliente"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
          <CustomButton
            variant="contained"
            onClick={() => loadClient(cpf)}
          >
            buscar
          </CustomButton>
        </Inline>
      }


      {client && <Description>
        <Image src={client.imageUrl || defaultImageUrl} />
        <Infos>
          <Info>Nome: {client.name}</Info>
          <Info>Endereço: {client.address}</Info>
          <Info>Email: {client.email}</Info>
          <Info>Cpf: {client.cpf}</Info>
          <Info>Identidade: {client.personalId}</Info>
        </Infos>
      </Description>}
    </>
  )
};

const defaultImageUrl = "https://i.stack.imgur.com/l60Hf.png";

const StepTitle = styled.h1`
  font-weight: normal;
  font-size: 1.5em;
  text-decoration: underline;
`;

const Inline = styled.div`
  display: flex;
  align-items: center;
`;

const CustomButton = styled(Button)`
  &.MuiButtonBase-root {
    margin-left: 10px;
  }
`;

const Description = styled.div`
  width: 800px;
  max-width: 90%;
  margin-top: 20px;
  padding: 20px;
  background-color: #FFF;
  border-radius: 10px;
  box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.39);
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 100px;
  height: 70px;
  border-radius: 100px;
`;

const Infos = styled.div`
  margin-left: 30px;
`;

const Info = styled.div`
  margin: 5px;
`;

export default ClientSearch;
