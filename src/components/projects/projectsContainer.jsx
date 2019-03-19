import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import ProjectLinks from './ProjectLinks';
import CoverPage from './CoverPage';
import Portfolio from './Portfolio';
import GasItUp from './GasItUp';
import Codewars from './Codewars';
import MovieFinder from './MovieFinder';
import AlwaysLearning from './AlwaysLearning';

class projectsContainer extends React.Component {
  
  constructor(props) {
    super(props);
    this.state ={
      activeProject: ""
    };
    this.clickPortfolioLink = this.clickPortfolioLink.bind(this);
    this.clickGasItUpLink = this.clickGasItUpLink.bind(this);
    this.clickCodeWarsLink = this.clickCodeWarsLink.bind(this);
    this.clickMovieFinderLink = this.clickMovieFinderLink.bind(this);
    this.clickAlwaysLearningLink = this.clickAlwaysLearningLink.bind(this);
  };
  clickPortfolioLink() {
    this.setState({activeProject: <Portfolio />})
  };
  clickGasItUpLink() {
    this.setState({activeProject: <GasItUp />})
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
                          clickPortfolioLink={this.clickPortfolioLink}
                          clickGasItUpLink={this.clickGasItUpLink}
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
                        clickPortfolioLink={this.clickPortfolioLink}
                        clickGasItUpLink={this.clickGasItUpLink}
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