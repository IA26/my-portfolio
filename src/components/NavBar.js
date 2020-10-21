import React from 'react';
import {NavLink} from 'react-router-dom'


function NavBar(props) {
    

    return (
    <nav className="navbar navbar-expand-lg navbar-dark" id="bg-colour">
        <div class="container">
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

            <ul className="navbar-nav nav-flex-icons">
                <li className="nav-item">
                      <a className="nav-link">
                        <i className="fab fa-facebook light-green-text-2"></i>
                     </a>
                 </li>
                <li>
                    <a href="https://www.youtube.com/">
                        <img className="images" src="https://www.flaticon.com/svg/static/icons/svg/2111/2111543.svg"/> 
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/">
                        <img className="images" src="https://www.flaticon.com/svg/static/icons/svg/2111/2111532.svg"/> 
                    </a>
                </li>
            </ul>
          </div>
        </div>
       </nav>
    )
}

export default NavBar;
