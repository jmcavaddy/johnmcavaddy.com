
import React, { useEffect, useState } from "react";
import { Card, Button, Navbar, Container, Row, Col } from "react-bootstrap";

import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME } from '../../utils/queries';
import { REMOVE_ENTRY } from "../../utils/mutations";
import Auth from '../../utils/auth';

  const Notes = () => {
  const { loading, data } = useQuery(QUERY_ME);
  const [removeEntry] = useMutation(REMOVE_ENTRY);

  const [userData, setUserData] = useState({});

  // use this to determine if `useEffect()` hook needs to run again
  const userDataLength = Object.keys(userData).length;
    
  useEffect(() => {
    if (data) {
      setUserData(data.me);
    }
  }, [data]);

  const handleDelete = async (entryId) => {
    try {
      await removeEntry({
          variables: { entryId: entryId },
      });

      setUserData((userData) => ({
        ...userData,
        entries: userData.entries.filter((entry) => {
        return entry._id !== entryId;
        }),
      }));

    } catch (err) {
      console.error(err);
    }

  };

  if (!userData || !userData.username) {
    return (
      <>
        <Navbar bg="dark" data-bs-theme="dark" className='p-3'>
          <Navbar.Brand href="#home" className='code'>MERNJournal</Navbar.Brand>
          <Navbar.Text className="ms-auto code">
            an e-journal
          </Navbar.Text>
        </Navbar>
        <h4 className="text-center">
          There is not a user logged in:
          {/* TODO: add a button here that directs user to landing page */}
          <Button className="m-2 code" variant="dark" href="/mernjournal">return to landing page</Button>
        </h4>
      </>
    );
  }

  // TODO: style saved entries so they are centered on mobile
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className="code">
        <Navbar.Text className='m-2'>MERNJournal</Navbar.Text>
        <Button className='ms-auto m-2' variant='danger' onClick={Auth.logout}>Logout</Button>
      </Navbar>

      <div className="container flex-column justify-center align-center text-center p-3 code">
        <Button className="m-2 code" variant="dark" href="/mernjournal/newentry">new entry</Button>
      </div>

      <h1 className="my-4 text-center code">saved entries</h1>

      <Container fluid>
        <Row>
            {userData.entries.map((entry) => {
              return (
                <Col key={entry._id} xs={12} md={4} lg={3} xl={2} className="d-flex justify-content-center align-items-center">
                  <Card className="card mx-2" style={{ width: "18rem", backgroundColor: "lavender", padding: "0.5rem", margin: "0.5rem" }}>
                    <Card.Body>
                      <Card.Title>{entry.entryTitle}</Card.Title>
                      <Card.Subtitle className="mb-1 text-muted">
                      {entry.createdAt}
                      </Card.Subtitle>
                      <Card.Text>
                        {entry.entryContent}
                      </Card.Text>
                      <Card.Link href={`/mernjournal/entry/${entry._id}`}>Edit</Card.Link>
                      <Card.Link href="#" onClick={() => handleDelete(entry._id)}>Delete</Card.Link>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </Container>
    </>
  );
};

export default Notes;
