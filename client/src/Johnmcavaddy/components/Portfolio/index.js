import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Portfolio() {

    const navigate = useNavigate();

  return (
    <div>
        {/* A grid that holds project cards, starting with MERNJournal and a button that redirects the user to johnmcavaddy.com/mernjournal */}
        <div className="row d-flex justify-content-center">
            <div className="card mb-2">
                <div className="card-body">
                    <h5 className="card-title">MERNJournal</h5>
                    <p className="card-text">An application created on the MERN stack that allows users to create an account, login, and create journal entries.</p>
                    <a className="btn btn-primary" href={`https://afternoon-taiga-70336.herokuapp.com/`}>View Project</a>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Accessibility Internet Rally 2023</h5>
                    <p className="card-text">Working with a team on an accessible website for a nonprofit in Austin, TX.</p>
                    <a className="btn btn-primary" href={'https://knowbility.org/programs/air/what-is-air'}>Read More</a>
                </div>
            </div>
        </div>
    </div>
  );
}
