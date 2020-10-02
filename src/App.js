import React from 'react';
import NavBar from './components/NavBar'
import { Router, Route, Switch } from "react-router";
import './App.css';

function App() {
  return (
    <div className="App">
        <div id="content-wrap"> 
          <NavBar/>
           <Switch>

           </Switch>
        </div> 
    </div>
  );
}

export default App;
