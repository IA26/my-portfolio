import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBContainer
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

function NavbarPage(props) {

  return (
      <MDBNavbar color="black" dark expand="md">
       <MDBNavbarBrand href="#"> <strong>Isaac Avilez</strong> </MDBNavbarBrand>
         <MDBNavbarNav left>
          <MDBNavItem></MDBNavItem>
         </MDBNavbarNav>




        <MDBNavbarNav right>  

          <MDBContainer>
            <a href="https://www.linkedin.com/in/isaac-sampson-avilez-423672197/" className="social-icon hover" >
              <MDBIcon fab icon="linkedin-in" />
            </a>
           
            <a href="https://youtube.com" className="social-icon hover" >
              <MDBIcon fas icon="code-branch" />
            </a>

            <a href="https://youtube.com" className="social-icon hover" >
              <MDBIcon fab icon="medium-m" />
            </a>
          </MDBContainer>
          
          
        

        <MDBNavItem>
          <MDBNavLink className="waves-effect waves-light d-flex align-items-center" to="#!">
                <MDBIcon icon="envelope" className="mr-1" />Contact</MDBNavLink>
        </MDBNavItem>
       </MDBNavbarNav>
      </MDBNavbar>
    );
}

export default NavbarPage;