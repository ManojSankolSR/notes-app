import { Toaster, toast } from 'sonner';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ScheduleNotification } from "./Notification";

function App() {
  return (
    <div className="App">
      <Toaster/>
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
      <button onClick={ async ()=>{
        await ScheduleNotification('ok','5');

      }} > sned Notification </button>
    </div>
  );
}

export default App;
