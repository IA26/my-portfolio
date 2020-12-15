import React from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBIcon, MDBContainer
} from "mdbreact";

function NavbarPage(props) {

  return (
      <MDBNavbar color="black" dark expand="md">
       <MDBNavbarBrand href="#"> <strong>Isaac Avilez</strong> </MDBNavbarBrand>
         <MDBNavbarNav left>
          <MDBNavItem></MDBNavItem>
         </MDBNavbarNav>




        <MDBNavbarNav right>  
          <MDBContainer>
            <a href="https://www.linkedin.com/in/isaac-sampson-avilez-423672197/" className="social-icon hover">
              <MDBIcon fab icon="linkedin-in" />
            </a>
           
            <a href="https://github.com/IA26" className="social-icon hover" >
              <MDBIcon fab icon="github" />
            </a>

            <a href="https://isaac1180a.medium.com/" className="social-icon hover" >
              <MDBIcon fab icon="medium-m" />
            </a>
          </MDBContainer>
          
          
        

        
       </MDBNavbarNav>
      </MDBNavbar>
    );
}

export default NavbarPage;