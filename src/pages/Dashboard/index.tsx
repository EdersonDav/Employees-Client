import React from "react";

import Menu from '../../components/Menu'
import Card from '../../components/Card'
import { Container, Content } from './styled'

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Menu />
      <Content>
        <h1>Home</h1>
        <div>
          <Card />
        </div>
      </Content>
    </Container>
  )
};

export default Dashboard;
