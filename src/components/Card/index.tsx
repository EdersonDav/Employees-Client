import React, { useState } from "react";
import { FiTrash, FiEdit } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { Container, ButtonIcons, ButtonIconsDiv, Content, Message } from './styled'

interface Employees {
  dataCadastro: string;
  cargo: string;
  cpf: string;
  nome: string;
  ufNascimento: string;
  salario: string;
  status: string;
}

interface Props {
  employees?: Employees[];
}

const Card: React.FC<Props> = (props) => {
  const [messages, setMessages] = useState("")

  const deleteEployee = (cpf: string) => {
    api.delete(`/${cpf}`).then(resp => {
      setMessages(resp.data.message);
    })
    setTimeout(() => {
      setMessages("");
    }, 8000);
  }
  return (
    <Container>
      {props.employees && (
        props.employees.map(emp => (
          <Content key={emp.cpf}>
            <table>
              <tr>
                <td> <span>Nome: </span>{emp.nome}</td>
                <td> <span>CPF: </span>{emp.cpf}</td>
                <td> <span>UF: </span>{emp.ufNascimento}</td>
              </tr>
              <tr>
                <td> <span>Cargo: </span> {emp.cargo}</td>
                <td> <span>Salário: </span> R$: {emp.salario}</td>
                <td> <span>Status: </span> {emp.status}</td>
              </tr>
              <tr>
                <td> <span>Data Cadastro: </span> {emp.dataCadastro}</td>
              </tr>
            </table>
            <ButtonIconsDiv>
              <ButtonIcons> <Link to="/create"><FiEdit size={22} color="#3030c5" /></Link> </ButtonIcons>
              <ButtonIcons onClick={() => deleteEployee(emp.cpf)}> <FiTrash size={22} color="#c53030" /></ButtonIcons>
            </ButtonIconsDiv>
          </Content>
        ))
      )}
      {!props.employees && (
        <Content>
          <table>
            <tr>
              <td> <span>Nome:</span> </td>
              <td> <span>CPF:</span> </td>
              <td> <span>UF:</span> </td>
            </tr>
            <tr>
              <td> <span>Cargo:</span> </td>
              <td> <span>Salário:</span> </td>
              <td> <span>Status:</span> </td>
            </tr>
            <tr>
              <td> <span>Data Cadastro:</span> </td>
            </tr>
          </table>
          <ButtonIconsDiv>
            <ButtonIcons> <Link to="/create"><FiEdit size={22} color="#3030c5" /></Link> </ButtonIcons>
            <ButtonIcons> <FiTrash size={22} color="#c53030" /></ButtonIcons>
          </ButtonIconsDiv>
        </Content>
      )}
      {messages && (
        <Message>
          <span>{messages}</span>
        </Message>
      )}
    </Container>
  )
};

export default Card;