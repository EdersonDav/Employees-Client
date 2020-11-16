import styled from 'styled-components';

export const Container = styled.div`
  width: 95%;
  margin: auto;
  display: flex;
`

export const Content = styled.div`
  width: 100%;
  padding-left: 20px;
  position: relative;
  h1{
    margin-bottom: 55px;
    margin-top: 8px;
  }
`
export const Form = styled.form`
  margin: auto;
  display: flex;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 20px;
  height: 200px;

  table{
    padding: 10px 30px;
    font-size: 19px;
    border-collapse: separate; 
    border-spacing: 0 2em;
    label{
      font-weight:500;
      margin: 10px
    }
    input{
      border: none;
      border-bottom: 1px solid #000;
      width: 150px
    }
    select{
      border-radius: 5px;
      background-color: transparent;
      padding: 5px
    }
  }

`

export const ButtonIcons = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  margin: 10px;
`

export const ButtonIconsDiv = styled.div`
  display: flex;
  position: absolute;
  right: 100px;
  bottom: 20px;
  @media (max-width:1000px){
    right: 5px;
  }
`
