import React from "react";
import {
MDBNavbar, MDBNavLink, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBIcon, MDBContainer
} from "mdbreact";

function NavbarPage(props) {

  return (
      <MDBNavbar color="white" dark expand="md">
       <MDBNavbarBrand href="/"> <strong class="paths">Isaac A.</strong> </MDBNavbarBrand>
         <MDBNavbarNav left>

           <MDBNavItem>
             <MDBNavLink to="/skills"><strong class="paths">Skills</strong></MDBNavLink>
           </MDBNavItem>
          
         </MDBNavbarNav>




        <MDBNavbarNav right>  

          <MDBNavItem>
             <MDBNavLink to="/contact"><strong class="paths">Contact</strong></MDBNavLink>
          </MDBNavItem>
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
          
          
        

        
       </MDBNavbarNav>
      </MDBNavbar>
    );
}

export default NavbarPage;




