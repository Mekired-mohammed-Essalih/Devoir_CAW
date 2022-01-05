import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import reactDom from 'react-dom';
import React from 'react';
import Hello from './React_Exaoles/Hello';
import HelloDef from './React_Exaoles/HelloDef';
import Box from './React_Exaoles/Box';
import Message from './React_Exaoles/Message';
import Game from './React_Exaoles/Game';
import Rando from './React_Exaoles/Rando';
import FixedClick from './React_Exaoles/FixedClick';
import ClickRandom from './React_Exaoles/ClickRandom';
import Comp from './React_Exaoles/Comp';
import LancerDe from './React_Exaoles/LancerDe';

class  App extends React.Component {
  render(){
    return(
    
      <div>
        <h1>jeux de dés</h1>
        
        <LancerDe/>
      </div>
    )
  }
 /* return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/
 
}

export default App;
