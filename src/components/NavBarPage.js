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
          <MDBNavItem> Contact me</MDBNavItem>
        
        </MDBNavbarNav>
      </MDBNavbar>
    );
}

export default NavbarPage;