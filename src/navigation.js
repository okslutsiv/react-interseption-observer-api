import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";

import { sectionsData } from "./sections";

const Navigation = ({ inView }) => {
  return (
    <Nav>
      <ul>
        {sectionsData.map(s => (
          <li key={s.id}>
            <Anchor href={`#${s.id}`} selected={s.id === inView.id}>
              {s.headline}
            </Anchor>
          </li>
        ))}
      </ul>
    </Nav>
  );
};
const Nav = styled.nav`
  padding: 1rem;

  & ul {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    list-style: none;
    padding: 0;
    margin: 8px 0;

    @media (max-width: 600px) {
      flex-direction: row;
    }

    & li {
      margin-left: 0;
    }
  }
`;

const Anchor = styled.a`
  text-decoration: none;
  display: inline-block;
  margin: 8px;
  color: currentColor;
  font-weight: bold;
  transition: all 0.3s linear;
  ${props =>
    props.selected
      ? css`
          color: red;
        `
      : ""};
`;

export default Navigation;
