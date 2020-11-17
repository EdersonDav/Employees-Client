import React, { useState, ChangeEvent, useRef } from "react";
import { FiSearch } from 'react-icons/fi'
import Card from '../../components/Card'

import Menu from '../../components/Menu'
import { Container, Content, ButtonIcons, Message } from './styled'
import api from '../../services/api';

interface Employees {
  dataCadastro: string;
  cargo: string;
  cpf: string;
  nome: string;
  ufNascimento: string;
  salario: string;
  status: string;
}

const Search: React.FC = () => {
  const [employees, setEmployees] = useState<Employees[]>()
  const [message, setMessage] = useState("")
  const [searchField, setSearchField] = useState("")
  const [min, setMin] = useState("")
  const [max, setMax] = useState("")
  const [urlParam, setUrlParam] = useState("")
  const [field, setField] = useState("")
  const formtRef = useRef<HTMLFormElement>(null)

  const handleField = (value: string) => {
    formtRef.current?.reset()
    setSearchField(value)
  }
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    let { name, value } = event.target;

    if (name === "dataCadastro") {
      const valueDates = value.split("-");
      value = `${valueDates[2]}.${valueDates[1]}.${valueDates[0]}`
    }
    setField(`${name}-${value}`);
    setUrlParam("search")
  }

  const handleInputChangeSalary = (event: ChangeEvent<HTMLInputElement>): void => {
    let { name, value } = event.target;
    if (name === "min") {
      setMin(value)
    }
    if (name === "max") {
      setMax(value)
    }
    setUrlParam("salary")
  }

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    const { name, value } = event.target;
    setField(`${name}-${value}`);
    setUrlParam("search")
  }

  const searchEmployeer = () => {
    if (urlParam == "salary") {
      if (Number(min) > Number(max)) {
        setMessage("O valor minímo não pode ser maior que o máximo");
        setTimeout(() => {
          setMessage("");
        }, 4000);
        return
      }
      api.get(`/${urlParam}/${min}-${max}`).then(resp => {
        setEmployees(resp.data);
        setMessage(resp.data.message)

        setTimeout(() => {
          setMessage("");
        }, 3000);
      }).catch(error => {
        console.log(error.data);
      })
    }

    api.get(`/${urlParam}/${field}`).then(resp => {
      setEmployees(resp.data);
      setMessage(resp.data.message)

      setTimeout(() => {
        setMessage("");
      }, 3000);
    }).catch(error => {
      console.log(error.data);
    })

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
          onChange={handleInputChange}
          defaultValue=""
        />
      case "dataCadastro":
        return <input
          autoComplete="off"
          type="date"
          name="dataCadastro"
          id="dataCadastro"
          required
          onChange={handleInputChange}
          defaultValue=""
        />
      case "cargo":
        return <input
          autoComplete="off"
          type="text"
          name="cargo"
          id="cargo"
          placeholder="Digite o cargo do funcionário"
          onChange={handleInputChange}
          defaultValue=""
        />
      case "cpf":
        return <input
          autoComplete="off"
          type="number"
          name="cpf"
          id="cpf"
          placeholder="Digite o CPF do funcionário"
          onChange={handleInputChange}
          defaultValue=""
          required
        />
      case "status":
        return <select name="status" id="status" onChange={handleSelectChange}>
          <option defaultValue="">Selecione o status</option>
          <option value="ATIVO">ATIVO</option>
          <option value="BLOQUEADO">BLOQUEADO</option>
        </select>
      case "salario":
        return [
          <input autoComplete="off" onChange={handleInputChangeSalary} defaultValue="" type="number" name="min" id="min" placeholder="Digite o valor menor" />,
          <input autoComplete="off" onChange={handleInputChangeSalary} defaultValue="" type="number" name="max" id="max" placeholder="Digite o valor maior" />
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
        <strong>Quantidade: {employees?.length}</strong>
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
          <form ref={formtRef}>
            {inputs()}
          </form>

          {searchField && (
            <ButtonIcons onClick={searchEmployeer}><FiSearch color="#64d059" size={25} /></ButtonIcons>
          )}
        </div>
        <div>
          <Card employees={employees} />
        </div>
      </Content>
      {message && (
        <Message>
          <span>{message}</span>
        </Message>
      )}
    </Container>
  )
};

export default Search;
