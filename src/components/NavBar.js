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




            <ul className="navbar-nav ml-auto list-unstyled">
                <li className="nav-item" >
                    <NavLink to="/projects" className="nav-link" activeClassName="">Projects</NavLink>
                </li>

                <li className="nav-item">
                   <NavLink to="/contact" className="nav-link" activeClassName="">Contact Me</NavLink>
                </li>

                <li>
                    <a href="https://github.com/IA26">
                        <img className="images" src="https://www.flaticon.com/svg/static/icons/svg/25/25657.svg"/> 
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/">
                        <img className="images" src="https://www.flaticon.com/svg/static/icons/svg/1384/1384046.svg"/> 
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/">
                        <img className="images" src="https://www.flaticon.com/svg/static/icons/svg/25/25657.svg"/> 
                    </a>
                </li>
            </ul>
          </div>
       </nav>
    )
}

export default NavBar;
