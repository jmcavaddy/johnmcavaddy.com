import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function Portfolio() {

    const navigate = useNavigate();

  return (
    <div>
        {/* A grid that holds project cards, starting with MERNJournal and a button that redirects the user to johnmcavaddy.com/mernjournal */}
        <div className="row">
            <div className="col-sm-6">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">MERNJournal</h5>
                        <p className="card-text">An application created on the MERN stack that allows users to create an account, login, and create journal entries.</p>
                        <a className="btn btn-primary" onClick={()=>{navigate(`/mernjournal`)}}>View Project</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
