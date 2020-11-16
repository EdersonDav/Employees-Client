import styled from 'styled-components';

export const Container = styled.div`
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 2px;
  }
  height: 75vh;
`
export const Content = styled.div`
  width: 100%;
  &:not(:first-child){
    margin-top:20px
  }
  margin: auto;
  display: flex;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 20px;

  table{
    padding: 10px 30px;
    font-size: 19px;
    border-collapse: separate; 
    border-spacing: 0 1.2em;
    span{
      font-weight:500;
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
  right: 20px;
  bottom: 20px;
`