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
  flex-direction: column;
  position: relative;
  border-radius: 20px;
  height: 350px;
  width: 80%;
  div{
    margin:auto;
    margin-top:20px;
    label{
    font-weight:500;
    margin: 10px
    }
    input{
      border: none;
      border-bottom: 1px solid #000;
      width: 200px
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
  right: 20%;
  bottom: 0;
  @media (max-width:1000px){
    right: 5px;
  }
`

export const Message = styled.div`
  position: absolute;
  top:50px;
  right: 5%;
  background-color: #0008;
  padding:10px;
  border-radius: 5px;
  @keyframes movement {
    0% { right: -120%; opacity: 0 }
    100% { right: 5%; opacity: 1 }
  }
  > span{
    font-weight: bold;
    color: #fff;
  }
  animation: movement 1s linear;
`
