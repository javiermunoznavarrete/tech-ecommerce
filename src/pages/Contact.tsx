import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: ''
  });

  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    
    // Mostrar alerta de éxito
    setShowAlert(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });

    // Ocultar alerta después de 5 segundos
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  return (
    <>
      <header className="bg-light py-5">
        <Container className="text-center">
          <h1 className="display-4">Contáctanos</h1>
          <p className="lead">Contacta a TechHome, tu tienda de tecnología de confianza.</p>
        </Container>
      </header>

      <Container className="my-5">
        <h2 className="text-center mb-4">Envíanos un mensaje</h2>
        
        {showAlert && (
          <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
            ¡Gracias por contactarnos! Te responderemos pronto.
          </Alert>
        )}
        
        <Row className="justify-content-center">
          <Col md={8}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Ingresa tu nombre"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Ingresa tu correo electrónico"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="message"
                  placeholder="Escribe tu mensaje"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" size="lg">
                Enviar Mensaje
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

      <Container className="my-5">
        <h2 className="text-center mb-4">Nuestra Ubicación</h2>
        <Row>
          <Col md={12}>
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.439874898731!2d-70.64826768480044!3d-33.44888998076998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5a1b5a1b5a1%3A0x0!2zMzPCsDI2JzU2LjAiUyA3MMKwMzgnNTMuOCJX!5e0!3m2!1ses-419!2scl!4v1680000000000!5m2!1ses-419!2scl" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de TechHome"
                className="rounded"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;