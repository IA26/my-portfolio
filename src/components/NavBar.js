import React from 'react';
import {NavLink} from 'react-router-dom'


function NavBar(props) {
    

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="navbar">
          <div className="collapse navbar-collapse vertically-centered" id="navbarNav">
            <ul className="navbar-nav">
             <li className="nav-item">
                <NavLink to="/login" className="nav-link" >Portfolio</NavLink>
             </li>
           
             <li className="nav-item" >
                 <NavLink to="/register" className="nav-link">Projects</NavLink>
             </li>  
            </ul>
          </div>
       </nav>
    )
}

export default NavBar;
