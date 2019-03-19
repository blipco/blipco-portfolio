import React from 'react';

class MovieFinder extends React.Component {
  render() {
    return (
      <div id="movieFinder">
        <img  id="movieFinderImg" src="movieFinder.png"/>
        <div id="movieFinderDescription" className="allProjectDescription">
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
          <a href="https://github.com/blipco/startnow-react200-movie-finder" id="movieFinderLink" className="projectLinks">
            GitHub Repository
          </a>
        </div>
      </div>
    );
  }
}
export default MovieFinder;