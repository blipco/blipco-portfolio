import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import ProjectLinks from './ProjectLinks';
import CoverPage from './CoverPage';
import Oma from './Oma';
import Portal from './Portal';
import Codewars from './Codewars';
import MovieFinder from './MovieFinder';
import AlwaysLearning from './AlwaysLearning';

class projectsContainer extends React.Component {
  
  constructor(props) {
    super(props);
    this.state ={
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
    if(this.state.activeProject == "") {
      return (
        <div>
          <Navbar />
          <div id="coverPageProjectContainer" className="projectContainer">
            <ProjectLinks activeProject={this.activeProject}
                          clickOMALink={this.clickOMALink}
                          clickPortalLink={this.clickPortalLink}
                          clickCodeWarsLink={this.clickCodeWarsLink}
                          clickMovieFinderLink={this.clickMovieFinderLink}
                          clickAlwaysLearningLink={this.clickAlwaysLearningLink} />
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
          <ProjectLinks activeProject={this.activeProject}
                        clickOMALink={this.clickOMALink}
                        clickPortalLink={this.clickPortalLink}
                        clickCodeWarsLink={this.clickCodeWarsLink}
                        clickMovieFinderLink={this.clickMovieFinderLink}
                        clickAlwaysLearningLink={this.clickAlwaysLearningLink}/>
          {this.state.activeProject}
        </div>
        <Footer />
      </div>
      )
    }
  }
}
export default projectsContainer;