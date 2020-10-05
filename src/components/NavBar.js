import React from 'react';
import {NavLink} from 'react-router-dom'


function NavBar(props) {
    

    return (
         <nav class="navbar navbar-start" role="navigation" aria-label="main navigation">
           <div id="navbarBasicExample" class="navbar-menu">
              <div class="navbar-start">
                  <a class="navbar-item">
                    <NavLink to="/contact" className="nav-link header-image" activeClassName="" >
                        Contact info
                    </NavLink>
                  </a>   
                  
                  <a class="navbar-item">
                    <NavLink to="/contact" className="nav-link header-image" activeClassName="" >
                        Personal Projects
                    </NavLink>
                 </a>
            </div>
          </div>
         </nav>
    )
}

export default NavBar;
