import React from "react";
import githubIcon from '../../assets/github-icon.svg'
import linkedInIcon from '../../assets/linkedin-icon.svg'

export default function Footer() {
    return (
        <footer className="footer d-flex justify-content-evenly align-items-center">
            <a href="https://www.linkedin.com/in/john-mcavaddy-72750618a"><img src={linkedInIcon} alt="LinkedIn"></img></a>
            <a href="https://github.com/jmcavaddy"><img src={githubIcon} alt="GitHub"></img></a>
        </footer>
    );
}