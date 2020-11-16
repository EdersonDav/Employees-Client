import React from "react";

import Menu from '../../components/Menu'
import { Container } from './styled'

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Menu />
      <h1>Home</h1>
    </Container>
  )
};

export default Dashboard;
