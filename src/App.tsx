import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Deployment Done!
        </p>
        <h3>{process.env.REACT_APP_MY_API}</h3>
      </header>
    </div>
  );
}

export default App;
