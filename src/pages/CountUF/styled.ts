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
  table{
    margin: auto;
    border-radius: 20px;
    background-color:#fff;
    border-collapse: separate; 
    border-spacing: 10em 1em;
    tr{
      text-align: center;
    }
    
  }
`;