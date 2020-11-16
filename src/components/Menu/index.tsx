import React from "react";
import { Link } from 'react-router-dom';
import { FiHome, FiPlus, FiSearch, FiMap } from 'react-icons/fi'

import logo from '../../assets/img/logo.png'

import { Container, Button } from './styled'

const Menu: React.FC = () => {
  return (
    <Container>
      <div>
        <img src={logo} alt="Allugator" />
      </div>
      <Button>
        <Link to="/"><FiHome size={25} /> <span>Início</span></Link>
      </Button>

      <Button>
        <Link to="/create"><FiPlus size={25} /> <span>Novo</span> </Link>
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