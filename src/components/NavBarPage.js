import React from "react";
import {NavLink} from 'react-router-dom'


function NavbarPage(props) {

  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-dark nav-custom"> 
     <a class="navbar-brand" href="/">Isaac Avilez</a>
      <div className="collapse navbar-collapse vertically-centered" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item" >
           <NavLink to="/skills" className="nav-link">Skills</NavLink>
          </li>
        </ul>
      </div>













    </nav>


      {/* // <MDBNav color="white" dark expand="md">
       
      //    <MDBNavbarNav left>
      //       <MDBNavbarBrand href="/"> <strong id="name" class="paths">Isaac A.</strong> </MDBNavbarBrand>
      //    </MDBNavbarNav>


         

          
         
      //     <MDBNavItem>
      //        <MDBNavLink to="/skills"><strong class="paths">Skills</strong></MDBNavLink>
      //     </MDBNavItem>

      //     {/* <MDBNavItem>
      //        <MDBNavLink to="/" href="https://student.lvh.me:8080/users/edit"><strong>Skisasalls</strong></MDBNavLink>
      //     </MDBNavItem> */}

      {/* //     <MDBNavItem id="nav-blog">
      //       <a id="nav-blog" className="paths"href="https://github.com/IA26"><strong>Blog</strong></a>
      //     </MDBNavItem>

      //     <MDBNavItem>
      //        <MDBNavLink to="/contact"><strong class="paths">Contact</strong></MDBNavLink>
      //     </MDBNavItem> */} 

         
           
              {/* <MDBContainer>
      //       <a href="https://www.linkedin.com/in/isaac-sampson-avilez-423672197/" className="social-icon hover">
      //         <MDBIcon fab icon="linkedin-in" />
      //       </a>
           
      //       <a href="https://github.com/IA26" className="social-icon hover" >
      //         <MDBIcon fab icon="github" />
      //       </a>

      //       <a href="https://isaac1180a.medium.com/" className="social-icon hover" >
      //         <MDBIcon fab icon="medium-m" />
      //       </a>
      //     </MDBContainer> */}
          
      {/* // </MDBNav> */}
      </>
    );
}

export default NavbarPage;




