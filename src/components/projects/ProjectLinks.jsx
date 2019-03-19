import React from 'react';

class ProjectLinks extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return(
      <div>
        <div id="projectLinks">
          <div id="portfolioLinkContainer" className="linkContainer" onClick={this.props.clickPortfolioLink}>
            <p id="portofolioText" className="linkText">
              Portfolio
            </p>
          </div>
          <div id="gasItUpLinkContainer" className="linkContainer" onClick={this.props.clickGasItUpLink}>
            <p id="gasItUpText" className="linkText">
              Gas It Up
            </p>
          </div>
          <div id="codeWarsLinkContainer" className="linkContainer" onClick={this.props.clickCodeWarsLink}>
            <p id="codewarsText" className="linkText">
              Code Wars
            </p>
          </div>
          <div id="movieFinderLinkContainer" className="linkContainer" onClick={this.props.clickMovieFinderLink}>
            <p id="movieFinderText" className="linkText">
              Movie Finder
            </p>
          </div>
          <div id="alwaysLearning" className="linkContainer" onClick={this.props.clickAlwaysLearningLink}>
            <p id="alwaysLearningText" className="linkText">
              Always Learning
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectLinks;