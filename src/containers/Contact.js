import React from "react";
import {
 MDBIcon, MDBContainer
} from "mdbreact";

function Contact(props) {
    return (
       <>
       <div className="contact-content">
           <h1 id="contact-id">Contact me</h1>
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
     </div>
    </>
    )
}

export default Contact
