import React, { useEffect } from "react";
import threeJsBackground from './components/background';
import { createGlobalStyle } from 'styled-components';
import Header from './components/header';
import Body from './components/body';
import ColorCtx, {colors} from './components/context';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Martel";
    src: url("/static/fonts/Martel-Black.ttf") format("truetype");
    font-weight: black;
  }

  body {
    font-size: 16px;
    margin: 0;
    background: #D6C6B8;
  }

  .container {
    display:grid;
    place-items:center;
  }

  canvas.three-js-bg {
    z-index: -1;
    position: fixed;
    width: 100vw;
    height: 100vh;
    margin: 0;
  }
`
function App() {
  useEffect(() => {
    threeJsBackground();
  })
  return (
    <React.Fragment>
      <ColorCtx.Provider value={colors}>
        <GlobalStyle />
        <canvas className="three-js-bg"></canvas>
        <div className="container">
          <Header />
          <Body />
        </div>
      </ColorCtx.Provider>
    </React.Fragment>
  );
}

export default App;
