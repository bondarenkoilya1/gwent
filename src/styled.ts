import emotionReset from "emotion-reset";

import { css } from "@emotion/react";

import styled from "@emotion/styled";

import woodImage from "./assets/photos/wood.jpg";

export const GlobalStyle = css`
  ${emotionReset}

  html {
    box-sizing: border-box;
    background:
      linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${woodImage}) center/cover no-repeat;
    height: 100%;
    width: 100%;
  }

  body,
  #root {
    height: 100%;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  #root {
    font-family: "Arial", sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const ContainerStyled = styled.div`
  max-width: 1410px;
  margin: 0 auto;
`;
