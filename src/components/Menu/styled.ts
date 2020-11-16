import styled from 'styled-components';



export const Container = styled.div`
  width: 20%;
  margin: auto;
  display: flex;
  flex-direction: column;
  margin-left: 0;
  div{
    background-color: #0009;
    text-align: center;
    padding: 5px;
    width: 70%;
    border-radius: 10px;
    margin-bottom: 50px;
    img{
      width: 150px;
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
    svg{
      margin-right: 10px;
    }
  }

`