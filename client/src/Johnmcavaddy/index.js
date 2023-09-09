import React, { useState } from "react";

import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import './index.css';

export default function Johnmcavaddy() {
    const [currentPage, setCurrentPage] = useState('About');
  
  // //   This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }
      if (currentPage === 'Contact') {
        return <Contact />;
      }
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
          <div className="m-3 d-flex flex-column h-100">
              {/* We are passing the currentPage from state and the function to update it */}
              <Header 
              currentPage={currentPage} handlePageChange={handlePageChange} 
              />
              {/* Here we are calling the renderPage method which will return a component  */}
              <div className="m-3">
                {renderPage()}
              </div>
              <Footer />
          </div>
    );
  }