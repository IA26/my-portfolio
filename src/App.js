import React from 'react';
import NavBar from './components/NavBar'
import Portfolio from './containers/Portfolio'
import { Router, Route, Switch } from "react-router";
import './App.css';

function App() {
  return (
    <div className="App" id="main-page">
        <div id="content-wrap"> 
          <NavBar/>
           <Switch>
              <Route exact path="/" render component={ Portfolio }/>
           </Switch>
        </div> 
    </div>
  );
}

export default App;
