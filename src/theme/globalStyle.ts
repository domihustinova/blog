import { createGlobalStyle } from 'styled-components/macro'

import { DEVICES_MIN } from './consts'

export const GlobalStyle = createGlobalStyle`

  html {
    font-size: 100%;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    height: 100%;
    min-height: 100vh;
    min-height: -webkit-fill-available;
    background-color: #fff;
    color: #000;
    text-align: center;
    font-family: "Helvetica Neue", Sans-Serif;
    font-style: normal;
    font-weight: normal;
    cursor: default;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1 {
    font-weight: 500;
    font-size: 32px;
    line-height: 48px;

    @media ${DEVICES_MIN.TABLET} {
    font-size: 40px;
    text-align: left;
  }
	}

  h3 {
    font-weight: 500;
    font-size: 28px;
    line-height: 32px;
  }

  h4 {
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
  }

  h6 {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }

  input, textarea, button {
    font-family: inherit
  }

  button, a {
    cursor: pointer;
  }
`
