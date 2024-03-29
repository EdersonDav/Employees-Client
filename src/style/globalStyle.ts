import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    outline:0
  }

  body{
    background: #EBEFF5;
    color:#36333E;
    -webkit-font-smoothing: antialiased;
    > div{
      margin-top: 30px
    }
  }

  body, input, button{
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6{
    font-weight: 500;
  }

  button{
    cursor:pointer;
  }
`;
