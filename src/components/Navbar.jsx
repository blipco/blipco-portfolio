import React from 'react';
import bobby from '../assets/Bobby.png';
import resume from '../assets/RESUME-3-12-19.pdf';

class Navbar extends React.Component {
  render() {
    return (
      <div id="navBar">
        <div id="navBarLeft">
          <a className="navBarLeft" id="navLinkHome" href='/'>Home</a>
          <a className="navBarLeft" id="navLinkContact" href='/contact'>Contact</a>
        </div>
        <img id="bobbyPic" src={bobby} />
        <div id="navBarRight">
          <a className="navBarRight" id="navLinkProjects" href='/projects'>Projects</a>
          <a className="navBarRight" id="resumeLink" target="_blank" href={resume}>Resume</a>
        </div>
      </div>
    );
  };
};

export default Navbar;