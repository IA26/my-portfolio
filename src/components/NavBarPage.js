import React from "react";
import {
MDBNav, MDBNavLink, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBIcon, MDBCol
} from "mdbreact";

function NavbarPage(props) {

  return (
      <MDBNav color="white" dark expand="md">
       <MDBNavbarBrand href="/"> <strong id="name" class="paths">Isaac A.</strong> </MDBNavbarBrand>
         <MDBNavbarNav left>

           
          
         </MDBNavbarNav>


         

          
         <MDBNav className="flex-column font-weight-bold">
          <MDBNavItem>
             <MDBNavLink to="/skills"><strong class="paths">Skills</strong></MDBNavLink>
          </MDBNavItem>

          <MDBNavItem>
             <MDBNavLink to="/contact"><strong class="paths">Contact</strong></MDBNavLink>
          </MDBNavItem>

         </MDBNav> 
           
           {/* <MDBContainer>
            <a href="https://www.linkedin.com/in/isaac-sampson-avilez-423672197/" className="social-icon hover">
              <MDBIcon fab icon="linkedin-in" />
            </a>
           
            <a href="https://github.com/IA26" className="social-icon hover" >
              <MDBIcon fab icon="github" />
            </a>

            <a href="https://isaac1180a.medium.com/" className="social-icon hover" >
              <MDBIcon fab icon="medium-m" />
            </a>
          </MDBContainer> */}
          
      </MDBNav>
    );
}

export default NavbarPage;




