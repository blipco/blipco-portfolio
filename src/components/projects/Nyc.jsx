import React from 'react';

class Nyc extends React.Component {
  render() {
    return (
      <div id="nyc">
        <img  id="nycImg" src="nyc.png"/>
        <div id="nycDescription" className="allProjectDescription">
          <h3>
            <strong>What It Does</strong>
          </h3>
          <p>
            This was my hackathon while I was in school.  It allows the user to <br/>
            search for a restaurant in New York City.  It returns the basic restaurant <br/>
            information as well as the NYC health inspection details.  It is <br/>
            the Germaphobe's guide to NYC restaurants.<br/>
          </p>
          <h3>
            <strong>What I Used</strong>
          </h3>
          <p>
            NYC Restaurant Spot was created with Javascript and React.   I also used <br/>
            the YELP and the City of New York API.  I designed it with Bootstrap and <br/>
            CSS styling.<br/>
          </p>
          <a href="https://github.com/blipco/startnow-react100-hackathon" id="nycLink" className="projectLinks" target="_blank">
            GitHub Repository
          </a><br/>
          <a href="https://blip-react-hackathon.herokuapp.com/" id="nycProject" className="projectLinks" target="_blank">
            Check It Out
          </a>
        </div>
      </div>  
    );
  }
}
export default Nyc;