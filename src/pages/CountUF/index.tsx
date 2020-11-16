import React from "react";

import Menu from '../../components/Menu'
import { Container } from './styled'

const CountUF: React.FC = () => {
  return (
    <Container>
      <Menu />
      <h1>Contagem por UF</h1>
    </Container>
  )
};

export default CountUF;