import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <Container className="text-center">
        <Row>
          <Col md={6}>
            <h5>Enlaces</h5>
            <div className="d-flex flex-column">
              <Link to="/" className="text-white text-decoration-none mb-1">
                Inicio
              </Link>
              <Link to="/contact" className="text-white text-decoration-none mb-1">
                Contacto
              </Link>
              <Link to="/shop" className="text-white text-decoration-none mb-1">
                Tienda
              </Link>
              <Link to="/about" className="text-white text-decoration-none">
                Sobre Nosotros
              </Link>
            </div>
          </Col>
          <Col md={6}>
            <h5>Redes Sociales</h5>
            <div className="my-3">
              <a 
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white me-3"
              >
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a 
                href="https://www.twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white me-3"
              >
                <i className="fab fa-twitter fa-2x"></i>
              </a>
              <a 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white"
              >
                <i className="fab fa-instagram fa-2x"></i>
              </a>
            </div>
          </Col>
        </Row>
        <div className="mt-3">
          <p className="mb-1">&copy; 2023 TechHome. Todos los derechos reservados.</p>
          <p className="mb-0">Desarrollado por Javier Muñoz</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;