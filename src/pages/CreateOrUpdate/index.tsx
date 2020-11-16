import React from "react";
import { FiSave, FiX } from 'react-icons/fi'

import Menu from '../../components/Menu'
import { Container, ButtonIcons, ButtonIconsDiv, Content, Form } from './styled'

const CreateOrUpdate: React.FC = () => {


  return (
    <Container>
      <Menu />
      <Content>
        <h1>Novo Funcionário</h1>
        <Form>
          <table>
            <tr>
              <td>
                <label>Nome:</label>
                <input
                  autoComplete="off"
                  type="text"
                  name="nome"
                  id="nome"
                  required
                />
              </td>
              <td>
                <label>CPF:</label>
                <input
                  autoComplete="off"
                  type="number"
                  name="cpf"
                  id="cpf"
                  required

                />
              </td>
              <td>
                <label>UF:</label>
                <input
                  autoComplete="off"
                  type="text"
                  name="ufNascimento"
                  id="ufNascimento"
                  maxLength={2}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Cargo:</label>
                <input
                  autoComplete="off"
                  type="text"
                  name="cargo"
                  id="cargo"
                />
              </td>
              <td>
                <label>Salário:</label>
                <input autoComplete="off" type="number" name="salario" id="salario" />
              </td>
              <td>
                <label>Status:</label>
                <select name="status" id="status">
                  <option value="ATIVO">ATIVO</option>
                  <option value="BLOQUEADO">BLOQUEADO</option>
                </select>
              </td>
            </tr>
          </table>
        </Form>
        <ButtonIconsDiv>
          <ButtonIcons> <FiSave size={22} color="#64d059" /> </ButtonIcons>
          <ButtonIcons> <FiX size={22} color="#c53030" /></ButtonIcons>
        </ButtonIconsDiv>
      </Content>
    </Container>
  )
};

export default CreateOrUpdate;