import React from 'react';
import { SocialIcon } from "react-social-icons";
import './Footer.css';

const Footer = () => {
  return (
    <div id="footer">
      <div id="icon-box">
        <SocialIcon className="icon" url="https://github.com/percist" />
        <SocialIcon className="icon" url="https://www.linkedin.com/in/crclark101010/" />
        <SocialIcon className="icon" url="mailto:percist@gmail.com" />
        <SocialIcon className="icon" url="https://angel.co/u/chris-clark-49" />
      </div>
      <h2 id="copyright-long">Copyright Chris Clark, 2021</h2>
      <h4 id="copyright-short">© Chris Clark, 2021</h4>
    </div >
  )
};

export default Footer;