import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import ProjectLinks from './ProjectLinks';
import CoverPage from './CoverPage';
import Portfolio from './Portfolio';
import GasItUp from './GasItUp';
import Nyc from './Nyc';
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
    this.clickNycLink = this.clickNycLink.bind(this);
    this.clickMovieFinderLink = this.clickMovieFinderLink.bind(this);
    this.clickAlwaysLearningLink = this.clickAlwaysLearningLink.bind(this);
  };
  clickPortfolioLink() {
    this.setState({activeProject: <Portfolio />})
  };
  clickGasItUpLink() {
    this.setState({activeProject: <GasItUp />})
  };
  clickNycLink() {
    this.setState({activeProject: <Nyc />})
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
          <div id="coverPageContainer">
            <div id="coverPageProjectLinks" className="projectContainer">
              <ProjectLinks activeProject={this.activeProject}
                            clickPortfolioLink={this.clickPortfolioLink}
                            clickGasItUpLink={this.clickGasItUpLink}
                            clickNycLink={this.clickNycLink}
                            clickMovieFinderLink={this.clickMovieFinderLink}
                            clickAlwaysLearningLink={this.clickAlwaysLearningLink} />
            </div>
            <div id="coverPage">
              <CoverPage />
            </div>
          </div>
          <Footer />
        </div>
      )
    } else {
      return(
      <div>
        <div id="activeProject" className="projectContainer">
          <ProjectLinks activeProject={this.activeProject}
                        clickPortfolioLink={this.clickPortfolioLink}
                        clickGasItUpLink={this.clickGasItUpLink}
                        clickNycLink={this.clickNycLink}
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