import React from "react";
import githubIcon from '../assets/github-icon.svg';
import linkedInIcon from '../assets/linkedin-icon.svg';

import './index.css';

export default function Footer() {
    return (
        <footer className="footer d-flex justify-content-center align-items-center gap-2">
            <a href="https://www.linkedin.com/in/john-mcavaddy-72750618a"><img src={linkedInIcon} alt="LinkedIn"></img></a>
            <a href="https://github.com/jmcavaddy"><img src={githubIcon} alt="GitHub"></img></a>
        </footer>
    );
}