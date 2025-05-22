import React from 'react';
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const NavigationBar: React.FC = () => {
  const location = useLocation();

  return (
    <Navbar bg="light" expand="lg" className="custom-navbar">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="nav-width">
          <img
            src="/images/logo.svg"
            alt="TechHome Logo"
            style={{ width: '100px', height: 'auto' }}
            className="d-inline-block align-text-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto mb-0">
            <Nav.Link 
              as={Link} 
              to="/" 
              active={location.pathname === '/'}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/shop" 
              active={location.pathname === '/shop'}
            >
              Tienda
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/about" 
              active={location.pathname === '/about'}
            >
              Sobre nosotros
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/contact" 
              active={location.pathname === '/contact'}
            >
              Contacto
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" type="submit">
              Buscar
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;