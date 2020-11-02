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
            <a href="https://youtube.com" id="hover" className="social-icon" >
              <MDBIcon fab icon="linkedin-in" />
            </a>
           

            
          </MDBContainer>
          
          
          
          
        

         <MDBNavItem href="https://github.com/IA26">
            <MDBNavLink className="waves-effect waves-light" to="https://hltv.org">
              <MDBIcon fas icon="code-branch"/>   
            </MDBNavLink>
        </MDBNavItem> 

        {/* <MDBNavItem>
            <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="linkedin-in" />
            </MDBNavLink>
        </MDBNavItem> */}

        {/*<MDBNavItem>
            <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="medium-m" />
            </MDBNavLink>
        </MDBNavItem> */}

        

        <MDBNavItem>
          <MDBNavLink className="waves-effect waves-light d-flex align-items-center" to="#!">
                <MDBIcon icon="envelope" className="mr-1" />Contact</MDBNavLink>
        </MDBNavItem>
       </MDBNavbarNav>
      </MDBNavbar>
    );
}

export default NavbarPage;