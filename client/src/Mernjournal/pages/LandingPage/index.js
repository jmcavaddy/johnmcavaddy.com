import React, { useState, useEffect } from 'react';	
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab, Button } from 'react-bootstrap';
import LoginForm from '../../components/LoginForm';
import SignupForm from '../../components/SignupForm'
import Auth from '../../utils/auth.js';

const LandingPage = () => {
  const [showModal, setShowModal] = useState(false);



  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className='p-3'>
        <Navbar.Brand href="#home" className='code'>MERNJournal</Navbar.Brand>
        <Navbar.Text className="ms-auto code">
          an e-journal
        </Navbar.Text>
      </Navbar>

      <div className="container flex-column justify-center align-center text-center p-3 code">
        <Button variant="dark" onClick={() => setShowModal(true)}>
          Login / Sign Up
        </Button>
      </div>
       
      <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="signup-modal"
        centered 
      >
        <Tab.Container defaultActiveKey="signup">
          <Modal.Header closeButton>
            <Modal.Title id="signup-modal">
              <Nav variant="pills">
                <Nav.Item>
                  <Nav.Link as={Link} to="#" eventKey="login">
                    Login
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="#" eventKey="signup">
                    Sign Up
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey="login">
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey="signup">
                <SignupForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};

export default LandingPage;
