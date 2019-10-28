import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled, { createGlobalStyle } from "styled-components";

import Article from "./article";
import Navigation from "./navigation";

function App() {
  const [inView, setInView] = useState({
    ref: null,
    id: "",
    ratio: 0
  });

  return (
    <div className="container">
      <GlobalStyle />
      <Header>How to plant?</Header>
      <Main>
        <Navigation inView={inView} />
        <Article setInView={setInView} inView={inView} />
      </Main>
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
body{
  background-color: #ddd;
  color:#212121;
}
.container {
  width:90%;
  margin:1rem auto;
  background-color:white;
  box-shadow:2px 2px 10px rgba(0,0,0,0.3);
  padding:1rem;
border-radius:4px;
}
`;
const Main = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
const Header = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 1.5rem;
  text-align: center;
  text-transform: uppercase;
`;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
