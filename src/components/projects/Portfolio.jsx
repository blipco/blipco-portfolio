import React from 'react';

class Portfolio extends React.Component {
  render() {
    return (
      <div id="portfolio">
        <img  id="portfolioImg" src="Portfolio.png"/>
        <div id="portfolioDescription" className="allProjectDescription">
          <h3>
          <strong>What It Does</strong>
          </h3>
          <p>
            You are visiting my portfolio right now!  My portfolio is my way tell my story, <br/>
            show the world what I have learned, and what I am learning.  I use my portfolio <br/>
            as a platform for me to experiement with new tech.
          </p>
          <h3>
            <strong>What I Used</strong>
          </h3>
          <p>
            My portfolio is created with Javascript, React and React Router. <br/>
            I designed it with custom CSS styling.
          </p>
        </div>
      </div>  
    );
  }
}
export default Portfolio;