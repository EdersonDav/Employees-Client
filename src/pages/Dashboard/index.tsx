import React, { useEffect, useState } from "react";

import Menu from '../../components/Menu'
import Card from '../../components/Card'
import { Container, Content } from './styled'
import api from '../../services/api'

interface Employees {
  dataCadastro: string;
  cargo: string;
  cpf: string;
  nome: string;
  ufNascimento: string;
  salario: string;
  status: string;
}

const Dashboard: React.FC = () => {
  const [employees, setEmployees] = useState<Employees[]>()
  useEffect(() => {
    api.get("/").then(resp => {
      setEmployees(resp.data);
    })
  }, [employees])
  return (
    <Container>
      <Menu />
      <Content>
        <h1>Home</h1>
        <strong>Quantidade: {employees?.length} </strong>
        <div>
          <Card employees={employees} />
        </div>
      </Content>
    </Container>
  )
};

export default Dashboard;
