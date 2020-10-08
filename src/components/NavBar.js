import React from 'react';
import {NavLink} from 'react-router-dom'


function NavBar(props) {
    

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
          <div className="collapse navbar-collapse vertically-centered">
            <ul className="navbar-nav list-unstyled">
                <li>
                    <NavLink to="/" className="nav-link">Portfolio</NavLink>
                </li>
            </ul>






            <ul className="navbar-nav ml-auto list-unstyled">
                <li className="nav-item" >
                    <NavLink to="/projects" className="nav-link">Projects</NavLink>
                </li>

                <li className="nav-item">
                   <NavLink to="/contact" className="nav-link">Contact Me</NavLink>
                </li>
            </ul>
          </div>
       </nav>
    )
}

export default NavBar;
