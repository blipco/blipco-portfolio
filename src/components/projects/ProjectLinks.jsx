import React from 'react';
import Oma from './Oma';
import Portal from './Portal';
import Codewars from './Codewars';
import AlwaysLearning from './AlwaysLearning';
import MovieFinder from './MovieFinder';

class ProjectLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      omaActive: false,
      portalActive: false,
      codeWarsActive: false,
      movieFinderActive: false,
      alwaysLearningActive: false,
      activeProject: ""
    };

    this.clickOMALink = this.clickOMALink.bind(this);
    this.clickPortalLink = this.clickPortalLink.bind(this);
    this.clickCodeWarsLink = this.clickCodeWarsLink.bind(this);
    this.clickMovieFinderLink = this.clickMovieFinderLink.bind(this);
    this.clickAlwaysLearningLink = this.clickAlwaysLearningLink.bind(this);
  };

  clickOMALink() {
    this.setState({activeProject: <Oma />})
  };
  clickPortalLink() {
    this.setState({activeProject: <Portal />})
  };
  clickCodeWarsLink() {
    this.setState({activeProject: <Codewars />})
  };
  clickMovieFinderLink() {
    this.setState({activeProject: <MovieFinder />})
  };
  clickAlwaysLearningLink() {
    this.setState({activeProject: <AlwaysLearning />})
  };

  render() {
    
    return(
      <div>
        <div id="projectLinks">
          <div id="omaLinkContainer" className="linkContainer">
            <button onClick={this.clickOMALink}>
              MORE INFO
            </button>
          </div>
          <div id="portalLinkContainer" className="linkContainer">
            <button onClick={this.clickPortalLink}>
              MORE INFO
            </button>
          </div>
          <div id="codeWarsLinkContainer" className="linkContainer">
            <button onClick={this.clickCodeWarsLink}>
              MORE INFO
            </button>
          </div>
          <div id="movieFinderLinkContainer" className="linkContainer">
            <button onClick={this.clickMovieFinderLink}>
              MORE INFO
            </button>
          </div>
          <div id="alwaysLearning" className="linkContainer">
          <button onClick={this.clickAlwaysLearningLink}>
            MORE INFO
          </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectLinks;