import React from "react";
import {
    MDBNav, MDBNavLink, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBIcon, MDBContainer
} from "mdbreact";

function Contact(props) {
    return (
        <>
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
        </>
    )
}

export default Contact
