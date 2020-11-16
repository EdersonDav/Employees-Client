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
  strong{
    position: absolute;
    right: 5%;
    top: 20px
  }
  p{
    margin-bottom:20px;
    font-size: 20px;
    font-weight:500;
    margin-right: 10px
  }
  > div:not(:last-child){
    display: flex;
    align-items: center;
    select{
      border: solid 1px #64d059;
      border-radius: 5px;
      background-color: #fff;
      padding: 5px;
      margin-left: 10px;
    }
    input{
      margin-left: 10px;
      border: none;
      border-bottom: 1px solid #000;
      width: 250px;
      background-color: transparent;
    }
  }
  div:last-child{
    margin-top: 20px;
    max-height: calc(75vh - 100px)
  }
  
`;
export const ButtonIcons = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  margin: 10px;
`