import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon 
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
        <MDBNavItem>
          <MDBNavLink className="waves-effect waves-light d-flex align-items-center" to="#!">
                <MDBIcon icon="envelope" className="mr-1" />Contact</MDBNavLink>
        </MDBNavItem>
        </MDBNavbarNav>
      </MDBNavbar>
    );
}

export default NavbarPage;