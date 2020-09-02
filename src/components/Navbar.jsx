import React from 'react';
import bobby from '../assets/Bobby.png';
import resume from '../assets/RESUME-8-29-20.pdf';

class Navbar extends React.Component {
  
  render() {
    
    return (
      <div>
        <div id="navBarDesktop">
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
        <div id="navBarMobile">
          <button className="navBarLeft" id="navLinkHome">
            <a href='/'>
              Home
            </a>
          </button>
          <button className="navBarLeft" id="navLinkContact">
            <a href='/contact'>
              Contact
            </a>
          </button>
          <button className="navBarRight" id="navLinkProjects">
            <a href='/projects'>
              Projects
            </a>
          </button>
          <button className="navBarRight" id="resumeLink">
            <a target="_blank" href={resume}>
              Resume
            </a>
          </button>
        </div>
       </div>
    );
  };
};

export default Navbar;