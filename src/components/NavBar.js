import React from 'react';
import {NavLink} from 'react-router-dom'


function NavBar(props) {
    

    return (
    <nav className="navbar navbar-expand-lg navbar-dark" id="bg-colour">
          <div className="collapse navbar-collapse vertically-centered">
            <ul className="navbar-nav list-unstyled">
                <li class="nav-item">
                    <NavLink to="/" className="nav-link" activeClassName="">Portfolio</NavLink>
                </li>
            </ul>




            <ul className="navbar-nav ml-auto list-unstylednav-flex-icons">
                <li className="nav-item" >
                    <NavLink to="/projects" className="nav-link" activeClassName="">Projects</NavLink>
                </li>

                <li className="nav-item">
                   <NavLink to="/contact" className="nav-link" activeClassName="">Contact Me</NavLink>
                </li>
            </ul>

            <ul className="nav navbar-nav nav-flex-icons ml-auto">
                <li className="nav-item">
                    <a className="nav-link waves-effect" target="_blank" href="https://github.com"> 
                         <i class="fas fa-code-branch fa-lg"></i>
                     </a>
                 </li>
                <li className="nav-item">
                     <a className="nav-link waves-effect" target="_blank" href="https://medium.com"> 
                         <i class="fab fa-medium-m fa-lg white-text"></i>
                     </a>
                </li>
                <li className="nav-item">
                     <a className="nav-link waves-effect" target="_blank" href="https:/linkedin.com"> 
                         <i class="fab fa-linkedin-in mdb-gallery-view-icon fa-lg white-text"></i>
                     </a>
                </li>
            </ul>
          </div>
       </nav>
    )
}

export default NavBar;
