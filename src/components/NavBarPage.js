import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

function NavbarPage(props) {

  return (
      <MDBNavbar color="black" dark expand="md">
        <MDBNavbarBrand href="#"> Isaac Avilez </MDBNavbarBrand>
         <MDBNavbarNav left>
          <MDBNavItem></MDBNavItem>
         </MDBNavbarNav>





        <MDBNavbarNav right> 
          <MDBNavItem className="white-text">
           <a className="nav-link waves-effect images" target="_blank" href="https://medium.com"> 
               <i class="fab fa-medium-m fa-lg white-text"></i>
           </a>
          </MDBNavItem>
        
        </MDBNavbarNav>
      </MDBNavbar>
    );
}

export default NavbarPage;