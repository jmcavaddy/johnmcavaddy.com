import React from "react";
import NavTabs from "../NavTabs";
import resume from '../../../assets/John_McAvaddy_Resume.docx'

const Header = ({ currentPage, handlePageChange }) => {
  return (
    <div className="container-fluid header">
      <header className="d-flex justify-content-between align-items-center flex-column flex-md-row">
        <div>
          <h1 style={{ fontSize: '2.5rem' }}>
            John McAvaddy
          </h1>
          <h3><a href={resume} download>Download my resume here!</a></h3>
        </div>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>
    </div>
  );
};
  
export default Header;
