import React from 'react';
import {NavLink} from 'react-router-dom'


function NavBar(props) {
    

    return (
         <nav class="navbar navbar-start" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <ul>
                <li>
                    <NavLink to="/contact" className="nav-link header-image" activeClassName="" >
                        Contact info
                    </NavLink>
                </li>
            </ul>
          </div>
         </nav>
    )
}

export default NavBar;
