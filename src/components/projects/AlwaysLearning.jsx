import React from 'react';

class AlwaysLearning extends React.Component {
  render() {
    return (
      <div id="alwaysLearning">
        <img  id="alwaysLearningImg" src="programming-languages.jpg"/>
        <div id="alwaysLearningDescription" className="allProjectDescription">
          <h3>
            <strong>What I Want To Learn</strong>
          </h3>
          <p>
            I want to learn Java so I can create a mobile app game. <br/>
            This has been a goal of mine since I starting learning how to code. <br/>
          </p>
          <h3>
            <strong>What I am Learning</strong>
          </h3>
          <p>
            <strong>Context API (React Hooks)</strong><br/>
            I am excited about replacing Redux with the Context API <br/>
            and understanding it more. <br/>
            <br/>
            <strong>Integrating API's</strong><br/>
            I have used multiple APIs in my projects on GitHub. <br/> 
            I am practicing more with APIs in my Gas It Up project.<br/>
          </p>
        </div>
      </div>  
    )
  }
}

export default AlwaysLearning;