import React from 'react';
import NavBarPage from './components/NavBarPage'
import Portfolio from './containers/Portfolio'
import { Route, Switch } from "react-router";
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
        <footer id="footer"> Footer for information</footer>
    </div>
  );
}

export default App;
