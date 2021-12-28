import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
    min-height: 100vh;
    font-size: 16px;
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  main {
    display: flex;
    flex-flow: wrap;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;

    section {
      flex: 1;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 1rem;
    }
  }
`;