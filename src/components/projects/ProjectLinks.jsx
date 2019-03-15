import React from 'react';

class ProjectLinks extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return(
      <div>
        <div id="projectLinks">
          <div id="omaLinkContainer" className="linkContainer">
            <button id="omaButton" onClick={this.props.clickOMALink}>
              MORE INFO
            </button>
          </div>
          <div id="portalLinkContainer" className="linkContainer">
            <button id="portalButton" onClick={this.props.clickPortalLink}>
              MORE INFO
            </button>
          </div>
          <div id="codeWarsLinkContainer" className="linkContainer">
            <button id="codeWarsButton" onClick={this.props.clickCodeWarsLink}>
              MORE INFO
            </button>
          </div>
          <div id="movieFinderLinkContainer" className="linkContainer">
            <button id="movieFinderButton" onClick={this.props.clickMovieFinderLink}>
              MORE INFO
            </button>
          </div>
          <div id="alwaysLearning" className="linkContainer">
          <button id="alwaysLearningButton" onClick={this.props.clickAlwaysLearningLink}>
            MORE INFO
          </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectLinks;