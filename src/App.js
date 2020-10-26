import React from 'react';
import NavBarPage from './components/NavBarPage'
import Portfolio from './containers/Portfolio'
import { Router, Route, Switch } from "react-router";
import './App.css';

function App() {
  return (
    <div className="App" id="main-page">
        <div id="content-wrap"> 
          <NavBarPage/>
           <Switch>
              <Route exact path="/" render component={ Portfolio }/>
           </Switch>
        </div> 
    </div>
  );
}

export default App;
