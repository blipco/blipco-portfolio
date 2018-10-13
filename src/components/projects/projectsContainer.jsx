import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Oma from './Oma';
import MovieFinder from './MovieFinder';
import Codewars from './Codewars';
import Portal from './Portal';
import AlwaysLearning from './AlwaysLearning';
import ProjectLinks from './ProjectLinks';
import CoverPage from './CoverPage';

class projectsContainer extends React.Component {
  
  constructor(props) {
    super(props);
  };

  render() {
    if(this.props.activeProject !== <Oma />||<Codewars />||<MovieFinder />||<Portal />||<AlwaysLearning />) {
      console.log(this.props.activeProject)
      return (
        <div>
          <Navbar />
          <div id="coverPageProjectContainer" className="projectContainer">
            <ProjectLinks />
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
          <ProjectLinks activeProject={this.props.activeProject} />
          {console.log(activeProject)}

          {console.log(this.props.activeProject)}
          {this.props.activeProject}
        </div>
        <Footer />
      </div>
      )
    }
  }
}
export default projectsContainer;