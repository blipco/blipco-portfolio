import React from 'react';

class GasItUp extends React.Component {
  render() {
    return (
      <div id="gasItUp">
        <img src="WorkInProgress.png" id="gasItUpImg"/> 
        <div id="gasItUpDescription" className="allProjectDescription">
          <h3>
            <strong>What It Does</strong>
          </h3>
          <p>
            Too many times have I been on a road trip and got stiffed by <br/>
            a friend for the gas money.  Gas It Up allows you to find out <br/>
            how much it will cost in gas before you go on a road trip.<br/>
          </p>
          <h3>
            <strong>What I Used</strong>
          </h3>
          <p>
            I am using Javascript, React, React Router, and three APIs to <br/>
            create Gas It Up. I am desinging it with custom CSS styling.<br/>
          </p>
        </div>
      </div>
    );
  }
}
export default GasItUp;