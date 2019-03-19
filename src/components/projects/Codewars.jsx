import React from 'react';

class Codewars extends React.Component {
  render() {
    return (
      <div id="codewars">
        <img  id="codewarsImg" src="codewars.png"/>
        <div id="codewarsDescription" className="allProjectDescription">
          <h3>
            <strong>I Cannot Learn How To Code Without Coding</strong>
          </h3>
          <p>
            Codewars is a great way for me to keep fresh with my coding skills.<br/>
            When I am learning a new technology, or brushing up on a language I already <br/>
            know, I can always go to Codewars to practice.<br/>
          </p>
          <a href="https://github.com/blipco/codeWars" id="codewarsLink" className="projectLinks">
            GitHub Repository
          </a>
        </div>
      </div>  
    );
  }
}
export default Codewars;