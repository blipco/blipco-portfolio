import React from 'react';

class AlwaysLearning extends React.Component {
  render() {
    return (
      <div id="alwaysLearning">
        <div id="alwaysLearningLogos">
          <img  id="alwaysLearningImg" src="codewars.png"/>
        </div>
        <div id="alwaysLearningDescription" className="allProjectDescription">
          <h3>
            <strong>What I am Learning</strong>
          </h3>
          <p>
            You are visiting my portfolio right now!  My portfolio is my way tell my story, <br/>
            show the world what I have learned, and what I am learning.  I use my portfolio <br/>
            as a platform for me to experiement with new tech.<br/>
          </p>
        </div>
      </div>  
    )
  }
}

export default AlwaysLearning;