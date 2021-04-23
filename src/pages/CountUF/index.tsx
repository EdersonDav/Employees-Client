import React, { useEffect, useState } from "react";
import axios from 'axios'
import api from '../../services/api'

import Menu from '../../components/Menu'
import { Container, Content } from './styled'

interface IBGE {
  nome: string;
  sigla: string;
}

interface State {
  sigla: string;
  value: number;
}

const Dashboard: React.FC = () => {
  const [stateIBGE, setStateIBGE] = useState<IBGE[]>()
  const [state, setState] = useState<State[]>()

  useEffect(() => {
    api.get("/byState").then(resp => {
      setState(resp.data)
    })
  }, [])

  useEffect(() => {
    axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados").then(resp => {
      setStateIBGE(resp.data)
    })
  }, [])

  const handleName = (sigla: string) => {
    let nome = ""
    stateIBGE?.forEach(s => {
      if (s.sigla === sigla) {

        nome = s.nome
      }
    })
    console.log(nome);
    return nome ? nome : ""
  }
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
          {state?.map(st => (
            <tr key={st.sigla}>
              <td>{handleName(st.sigla)}</td>
              <td>{st.sigla}</td>
              <td>{st.value}</td>
            </tr>
          ))}

        </table>
      </Content>
    </Container>
  )
};

export default Dashboard;
