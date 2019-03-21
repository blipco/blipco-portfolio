import React from 'react';

class MovieFinder extends React.Component {
  render() {
    return (
      <div id="movieFinder">
        <img  id="movieFinderImg" src="MovieFinder.png"/>
        <div id="movieFinderDescription" className="allProjectDescription">
          <h3>
            <strong>What It Does</strong>
          </h3>
          <p>
            The Movie Finder allows the user to search for a movie by the title.
            It shows 10 search results at a time.  It also provides the user with
            more information about the movie like IMDB rating, description, 
          </p>
          <h3>
            <strong>What I Used</strong>
          </h3>
          <p>
            My portfolio is created with Javascript, React and React Router. <br/>
            I designed it with custom CSS styling.
          </p>
          <a href="https://github.com/blipco/startnow-react200-movie-finder" id="movieFinderLink" className="projectLinks" target="_blank">
            GitHub Repository
          </a><br/>
          <a href="https://blipco-movie-finder.herokuapp.com/" id="movieFinderProject" className="projectLinks" target="_blank">
            Check It Out
          </a>
        </div>
      </div>
    );
  }
}
export default MovieFinder;