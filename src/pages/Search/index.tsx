import React, { useState } from "react";
import { FiSearch } from 'react-icons/fi'
import Card from '../../components/Card'

import Menu from '../../components/Menu'
import { Container, Content, ButtonIcons } from './styled'

const Search: React.FC = () => {
  const [searchField, setSearchField] = useState("")
  const handleField = (value: string) => {
    setSearchField(value)
  }
  const inputs = () => {
    switch (searchField) {
      case "nome":
        return <input
          autoComplete="off"
          type="text"
          name="nome"
          id="nome"
          placeholder="Digite o nome do funcionário"
          required
        />
      case "dataCadastro":
        return <input
          autoComplete="off"
          type="date"
          name="dataCadastro"
          id="dataCadastro"
          required
        />
      case "cargo":
        return <input
          autoComplete="off"
          type="text"
          name="cargo"
          id="cargo"
          placeholder="Digite o cargo do funcionário"
        />
      case "cpf":
        return <input
          autoComplete="off"
          type="number"
          name="cpf"
          id="cpf"
          placeholder="Digite o CPF do funcionário"
          required
        />
      case "status":
        return <select name="status" id="status">
          <option value="ATIVO">ATIVO</option>
          <option value="BLOQUEADO">BLOQUEADO</option>
        </select>
      case "salario":
        return [
          <input autoComplete="off" type="number" name="min" id="min" placeholder="Digite o valor menor" />,
          <input autoComplete="off" type="number" name="max" id="max" placeholder="Digite o valor maior" />
        ]

      default:
        return <span></span>
    }
  }
  return (
    <Container>
      <Menu />
      <Content>
        <h1>Pesquisar</h1>
        <strong>Quantidade: </strong>
        <p>Pesquisar Funcionário Por:</p>
        <div>
          <select onChange={e => handleField(e.target.value)} name="search" id="search">
            <option selected value="">Selecione um campo</option>
            <option value="dataCadastro">Data Cadastro</option>
            <option value="cargo">Cargo</option>
            <option value="nome">Nome</option>
            <option value="cpf">CPF</option>
            <option value="status">Status</option>
            <option value="salario">Media salarial</option>
          </select>
          {inputs()}
          {searchField && (
            <ButtonIcons><FiSearch color="#64d059" size={25} /></ButtonIcons>
          )}
        </div>
        <div>
          <Card />
        </div>
      </Content>
    </Container>
  )
};

export default Search;
