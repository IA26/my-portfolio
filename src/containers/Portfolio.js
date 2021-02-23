import React from 'react';


function Portfolio(props) {
    

    return (
        <div className="portfolio-content">      
          <h1>Hello, my name is Isaac, and I am a Full-stack developer.</h1>
          <h3>Below I've added some of my projects that I've worked on.</h3>
          

          <ul>
            <li> 
              <a href="https://github.com/IA26/covidgains-front-end"> Covid-gains front-end</a> | <a href="https://github.com/IA26/covidgains-back-end"> Covid-gains back-end</a>
            </li> 
            <li> 
              <a href="https://github.com/IA26/house-of-gains"> House of gains</a>
            </li>
          </ul>

          <h3>If you would like to contact me, check out my <a href="https://www.linkedin.com/in/isaac-sampson-avilez-423672197/">linkedIn</a></h3> 
        </div> 
    )
}

export default Portfolio; 
