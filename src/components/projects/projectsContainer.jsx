import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Oma from './Oma';
import MovieFinder from './MovieFinder';
import Codewars from './Codewars';
import Portal from './Portal';
import AlwaysLearning from './AlwaysLearning';
// import ProjectLinks from './ProjectLinks';
import CoverPage from './CoverPage';

class projectsContainer extends React.Component {
  
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
    console.log("Oma", this.state.activeProject)
  };
  clickPortalLink() {
    this.setState({activeProject: <Portal />})
    console.log("Portal", this.state.activeProject)
  };
  clickCodeWarsLink() {
    this.setState({activeProject: <Codewars />})
    console.log("CodeWars", this.state.activeProject)
  };
  clickMovieFinderLink() {
    this.setState({activeProject: <MovieFinder />})
    console.log("MovieFinder", this.state.activeProject)
  };
  clickAlwaysLearningLink() {
    this.setState({activeProject: <AlwaysLearning />})
    console.log("Always Learning", this.state.activeProject)
  };

  render() {
    if(this.state.activeProject !== <Oma />||<Codewars />||<MovieFinder />||<Portal />||<AlwaysLearning />) {
      return (
        <div>
          <Navbar />
          <div id="coverPageProjectContainer" className="projectContainer">
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
        <CoverPage />
          </div>
          <Footer />
        </div>
      )
    } else {
      return(
      <div>
        <Navbar />
        <div id="activeProject" className="projectContainer">
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
        {this.state.activeProject}
        </div>
        <Footer />
      </div>
      )
    }
  }
}
export default projectsContainer;