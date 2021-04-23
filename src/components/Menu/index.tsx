import React from "react";
import { Link } from 'react-router-dom';
import { FiHome, FiPlus, FiSearch, FiMap } from 'react-icons/fi'

import { Container, Button } from './styled'

const Menu: React.FC = () => {
  return (
    <Container>
      <Button>
        <Link to="/"><FiHome size={25} /> <span>Início</span></Link>
      </Button>

      <Button>
        <Link to="/create/00"><FiPlus size={25} /> <span>Novo</span> </Link>
      </Button>

      <Button>
        <Link to="/search"> <FiSearch size={25} /> <span>Pesquisar</span> </Link>
      </Button>

      <Button >
        <Link to="/count"> <FiMap size={25} /> <span>Contagem</span> </Link>
      </Button>

    </Container>
  )
};

export default Menu;