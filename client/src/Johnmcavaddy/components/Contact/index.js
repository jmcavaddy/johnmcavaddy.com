import React from 'react';
import githubIcon from '../../../assets/github-icon.svg';
import linkedInIcon from '../../../assets/linkedin-icon.svg';

export default function Contact() {
  return (
    <div>
      <div className="row d-flex justify-content-center">
        <div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Find me on LinkedIn and GitHub, or email me at johnmcavaddy@gmail.com</h5>
                <div className="d-flex justify-content-center gap-4">
                  <a href="https://www.linkedin.com/in/john-mcavaddy-72750618a"><img src={linkedInIcon} alt="LinkedIn"></img></a>
                  <a href="https://github.com/jmcavaddy"><img src={githubIcon} alt="GitHub"></img></a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
