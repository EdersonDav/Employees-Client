import React from "react";

import Menu from '../../components/Menu'
import { Container } from './styled'

const Search: React.FC = () => {
  return (
    <Container>
      <Menu />
      <h1>Pesquisar</h1>
    </Container>
  )
};

export default Search;