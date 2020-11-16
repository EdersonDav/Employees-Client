import React from "react";

import Menu from '../../components/Menu'
import { Container } from './styled'

const CreateOrUpdate: React.FC = () => {
  return (
    <Container>
      <Menu />
      <h1>Novo</h1>
    </Container>
  )
};

export default CreateOrUpdate;