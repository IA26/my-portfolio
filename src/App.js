import React from 'react';
// import NavBarPage from './components/NavBarPage'
import NavBar from './components/NavBar'
import Portfolio from './containers/Portfolio'
import Skills from './containers/Skills'
import Contact from './containers/Contact'
import { Route, Switch } from "react-router";
import './App.css';

function App() {
  return (
    <div className="App" id="main-page">
        <div id="content-wrap"> 
          <NavBar/>
           <Switch> 
              <Route exact path="/" render component={ Portfolio }/>
              <Route exact path="/skills" render component={ Skills } /> 
              <Route exact path="/contact" render component={ Contact } /> 
           </Switch>
        </div> 
        <h1> Something </h1>
        <h1> Something </h1>
        <h1> Something </h1>
        <h1> Something </h1>
        <h1> Something </h1>
        <h1> Something </h1>
        <h1> Something </h1>
        <h1> Something </h1>
        <h1> Something </h1>
        <h1> Something </h1>
        <h1> Something </h1>
        <h1> Something </h1>
        <h1> Something </h1><h1> Something </h1>
        <h1> Something </h1>
        <h1> Something </h1>
        <h1> Something </h1>
        <h1> Something </h1>
        <h1> Something </h1>
        <h1> Something </h1>
        <h1> Something </h1>
        

        <footer id="footer">
           
         </footer>
    </div>
  );
}

export default App;
