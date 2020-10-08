import React from 'react';
import {NavLink} from 'react-router-dom'


function NavBar(props) {
    

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
          <div> 
            {/* <ul>
                <li>
                    <NavLink>Homepage</NavLink>
                </li>    
            </ul> */}
          </div> 
          <div className="collapse navbar-collapse vertically-centered">
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


const reverse = (string) => { 
    let reversed = ''

    for (let character of string) {
        reversed = character + reversed;
    }
   return reversed; 
}