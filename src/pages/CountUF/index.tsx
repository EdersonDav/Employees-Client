import React from "react";

import Menu from '../../components/Menu'
import { Container, Content } from './styled'

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Menu />
      <Content>
        <h1>Funcionários por estado</h1>
        <table>
          <tr>
            <th>Estado</th>
            <th>UF</th>
            <th>Quantidad</th>
          </tr>
          <tr>
            <td>São Paulo</td>
            <td>SP</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Rio da Janeiro</td>
            <td>RJ</td>
            <td>40</td>
          </tr>
        </table>
      </Content>
    </Container>
  )
};

export default Dashboard;
