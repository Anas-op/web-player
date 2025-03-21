import { createGlobalStyle } from 'styled-components';
import theme from './theme';
const { colors, fontSizes, fonts } = theme;

const GlobalStyle = createGlobalStyle`

    @font-face {
      font-family: 'Montserrat';
      src: url('/fonts/Montserrat-Medium.ttf');
      font-weight: 500;
      font-style: normal;
    }

    @font-face {
      font-family: 'Montserrat';
      src: url('/fonts/Montserrat-Light.ttf');
      font-weight: 300;
      font-style: normal;
    }


    @font-face {
      font-family: 'Montserrat';
      src: url('/fonts/Montserrat-Bold.ttf');
      font-weight: 700;
      font-style: normal;
    }


    @font-face {
      font-family: 'Montserrat';
      src: url('/fonts/Montserrat-Regular.ttf');
      font-weight: 400;
      font-style: normal;
    }



    @font-face {
      font-family: 'Montserrat';
      src: url('/fonts/Montserrat-SemiBold.ttf');
      font-weight: 600;
      font-style: normal;
    }
  

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: 100%;
  }


  div::-webkit-scrollbar {
    width: 0px;
  }


  body {
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: ${fonts.primary};
    font-size: ${fontSizes.base};
    color: ${colors.white};
    background-color:#000;
  }

  #root {
    min-height: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    letter-spacing: -.025em;
    margin: 0 0 10px;
    font-weight: 700;
  }


  h1{
    font-weight:700;
  }

  h2{
    font-weight:600;
  }

  h3{
    font-weight:500;
  }

  h4{
    font-weight:400;
  }

  h5{
    font-weight:300;
  }

  p {
    margin: 0 0 10px;
  }

  ol, ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  a {
    display: inline-block;
    text-decoration: none;
    color: inherit;
    transition: ${theme.transition};
    cursor: pointer;
  }

  img {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }

  svg {
    fill: currentColor;
    vertical-align: middle;
  }

  input {
    border-radius: 0;
    outline: 0;
    &::placeholder {
      opacity: 0.7;
    }
    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }

  button {
    display: inline-block;
    color: ${colors.lightestGrey};
    font-family: ${fonts.primary};
    font-size: ${fontSizes.base};
    font-weight: 700;
    border-radius: 50px;
    border: 0;
    padding: 10px 20px;
    cursor: pointer;
    transition: ${theme.transition};

    &:hover,
    &:focus {
      color: ${colors.white};
      outline: 0;
    }
  }
`;

export default GlobalStyle;
