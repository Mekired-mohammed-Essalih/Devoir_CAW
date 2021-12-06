import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import reactDom from 'react-dom';
import React from 'react';
import Hello from './React_Exaoles/Hello';
import HelloDef from './React_Exaoles/HelloDef';
import Box from './React_Exaoles/Box';
import Message from './React_Exaoles/Message';

class  App extends React.Component {
  render(){
    return(
      
      <div>
        <h1>hello to my first web page en reactjs</h1>
        <HelloDef/>
        <HelloDef from="foufa" to="ali"/>
        <Box  favoriteColor="#00ffbf" otherColor= "black" message="i am in box page " />
        <br></br>
        <Box/>
        <br></br>
        <Message/>
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
