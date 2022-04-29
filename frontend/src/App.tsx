import React from 'react';
import './App.css';
import { Login } from './components/Auth/login';
import { Signup } from './components/Auth/Signup';

function App() {
  return (
    <div className="App">
      <header><h1>RetMe</h1></header>
      {/* <Login/> */}
      <Signup/>
    </div>
  );
}

export default App;
