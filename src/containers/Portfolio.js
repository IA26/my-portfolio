import React from 'react';

function Portfolio(props) {
    

    return (
        <div className="portfolio-content">      
          <h1>Welcome to my portfolio</h1>
          <h2>Hello, my name is Isaac, and I am a Full-stack developer.</h2>
          <h3>I'm an avid enjoyer of lifting weights, and programming.</h3> 
          <h3>Below I've added some of my projects that I've worked on.</h3>
          

          <ul>
            <li> 
              <a href="https://github.com/IA26/covidgains-front-end"> Covid-gains front-end</a>
            </li> 
            <li> 
              <a href="https://github.com/IA26/covidgains-back-end"> Covid-gains front-end</a>
            </li>
            <li> 
              <a href="https://github.com/IA26/house-of-gains"> House of gains</a>
            </li>
          </ul>
        </div> 
    )
}

export default Portfolio; 
