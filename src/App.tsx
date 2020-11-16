import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import GlobalStyled from "./style/globalStyle";


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Router />
      <GlobalStyled />
    </BrowserRouter>
  );
};

export default App;
