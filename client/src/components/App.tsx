import * as React from "react";
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function App(): JSX.Element {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container style={{ flexWrap: "wrap" }}>
          <Navbar.Brand href="/">Random Pic</Navbar.Brand>
          <Nav className="me-auto">
            {/* <LinkContainer to="/Home"> */}
            <Nav.Link as={Link} to="/Home">Home</Nav.Link>
            {/* </LinkContainer> */}
            <LinkContainer to="/Feature">
              <Nav.Link>Features</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/About">
              <Nav.Link>About Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Contact">
              <Nav.Link>Contact Us</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
