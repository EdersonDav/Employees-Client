import styled from 'styled-components';

export const Container = styled.div`
  width: 250px;
  margin: 0 auto auto;
  display: flex;
  flex-direction: column;
  margin-left: 0;
  div{
    background-color: #0009;
    text-align: center;
    padding: 5px;
    width: 180px;
    border-radius: 10px;
    margin-bottom: 50px;
    img{
      width: 150px;
    }
  }
  @media (max-width:600px){
    span, > div{
      display: none;
    }
  }
  
`

export const Button = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  width: 90%;
  margin-bottom: 30px;
  font-size: 20px;
  font-weight:500;
  a{
    margin-left: 20px;
    text-decoration: none;
    color: #36333E;
    display: flex;
    align-items: center;
    &:hover{
      color:#64D059
    }
    svg{
      margin-right: 10px;
    }
  }

`

