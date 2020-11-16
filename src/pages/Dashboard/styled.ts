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
`;