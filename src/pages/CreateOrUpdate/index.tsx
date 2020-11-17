import React, { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { FiSave, FiX } from 'react-icons/fi';
import { useHistory, useRouteMatch, Link } from 'react-router-dom';

import Menu from '../../components/Menu'
import { Container, ButtonIcons, ButtonIconsDiv, Content, Form, Message } from './styled'
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

interface CPFParams {
  cpf: string;
}

const CreateOrUpdate: React.FC = () => {
  const { params } = useRouteMatch<CPFParams>();
  const history = useHistory();
  const [message, setMessage] = useState("")
  const [employee, setEmployee] = useState<Employees>({
    dataCadastro: "",
    cargo: "",
    cpf: "",
    nome: "",
    ufNascimento: "",
    salario: "",
    status: ""
  })
  useEffect(() => {
    if (params.cpf !== "00") {
      api.get(`/search/cpf-${params.cpf}`).then(resp => {
        setEmployee(resp.data[0]);
      })
    } else {
      const now = new Date()

      const dataCadastro = `${now.getDate() < 10 ? "0" + now.getDate() : now.getDate()}/${(now.getMonth() + 1) < 10 ? "0" + (now.getMonth() + 1) : (now.getMonth() + 1)}/${now.getFullYear()}`
      setEmployee({ ...employee, dataCadastro });
    }
  }, [params.cpf])

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    sentEmployee()
  }
  const sentEmployee = () => {
    const { dataCadastro, cargo, cpf, nome, salario, ufNascimento, status } = employee;
    const data = {
      dataCadastro,
      cargo,
      cpf,
      nome,
      ufNascimento,
      salario,
      status,
    };
    console.log(data);

    api.post('/', data).then(resp => {
      setMessage(resp.data.message)

      setTimeout(() => {
        setMessage("");
        if (resp.data.message === "Funcionário atualizado com sucesso" || resp.data.message === "Funcionário criado com sucesso") {
          history.goBack();
        }
      }, 3000);

    }).catch(error => {
      console.log(error.data);
    })
  }
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    let { name, value } = event.target;
    if (name === "ufNascimento") {
      value = value.toUpperCase()
    }
    setEmployee({ ...employee, [name]: value });
  }

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    const { name, value } = event.target;
    setEmployee({ ...employee, [name]: value });
  }

  return (
    <Container>
      <Menu />
      <Content>
        <h1>Novo Funcionário</h1>
        <Form onSubmit={handleSubmit}>
          <div>
            <label>Nome:</label>
            <input
              autoComplete="off"
              type="text"
              name="nome"
              id="nome"
              onChange={handleInputChange}
              value={employee.nome}
              required
            />
          </div>
          <div>
            <label>CPF:</label>
            <input
              autoComplete="off"
              type="number"
              name="cpf"
              id="cpf"
              required
              value={employee.cpf}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>UF:</label>
            <input
              autoComplete="off"
              type="text"
              name="ufNascimento"
              id="ufNascimento"
              maxLength={2}
              onChange={handleInputChange}
              value={employee.ufNascimento}
            />
          </div>
          <div>
            <label>Cargo:</label>
            <input
              autoComplete="off"
              type="text"
              name="cargo"
              id="cargo"
              onChange={handleInputChange}
              value={employee.cargo}
            />
          </div>
          <div>
            <label>Salário:</label>
            <input
              autoComplete="off"
              type="number"
              name="salario"
              id="salario"
              onChange={handleInputChange}
              value={employee.salario}
            />
          </div>
          <div>
            <label>Status:</label>
            <select name="status" id="status" onChange={handleSelectChange}>
              <option value={employee.status}>{employee.status !== "" ? employee.status : "Selecione o status"}</option>
              <option value="ATIVO">ATIVO</option>
              <option value="BLOQUEADO">BLOQUEADO</option>
            </select>
          </div>


        </Form>
        <ButtonIconsDiv>
          <ButtonIcons onClick={handleSubmit} type="submit"> <FiSave size={22} color="#64d059" /> </ButtonIcons>
          <ButtonIcons><Link to="/"><FiX size={22} color="#c53030" /></Link> </ButtonIcons>
        </ButtonIconsDiv>
      </Content>

      {message && (
        <Message>
          <span>{message}</span>
        </Message>
      )}

    </Container>
  )
};

export default CreateOrUpdate;