import React from 'react';
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const NavigationBar: React.FC = () => {
  const location = useLocation();

  return (
    <Navbar bg="light" expand="lg" className="custom-navbar shadow-sm">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="nav-width">
          <img
            src="/images/logo.svg"
            alt="TechHome Logo"
            style={{ width: '100px', height: 'auto' }}
            className="d-inline-block align-text-top"
            onError={(e) => {
              // Fallback si no existe el logo
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.parentElement!.innerHTML = '<strong>TechHome</strong>';
            }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto mb-0">
            <Nav.Link
              as={Link}
              to="/"
              className={location.pathname === '/' ? 'active' : ''}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/shop"
              className={location.pathname === '/shop' ? 'active' : ''}
            >
              Tienda
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className={location.pathname === '/about' ? 'active' : ''}
            >
              Sobre nosotros
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className={location.pathname === '/contact' ? 'active' : ''}
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