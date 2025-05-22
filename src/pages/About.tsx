import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
}

const About: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Juan Pérez",
      position: "CEO y Fundador",
      image: "/images/team1.jpg"
    },
    {
      id: 2,
      name: "María López",
      position: "Gerente de Ventas",
      image: "/images/team2.jpg"
    },
    {
      id: 3,
      name: "Carlos García",
      position: "Jefe de Tecnología",
      image: "/images/team3.jpg"
    }
  ];

  const galleryImages = [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg"
  ];

  return (
    <>
      <header className="bg-light py-5">
        <Container className="text-center">
          <h1 className="display-4">Sobre Nosotros</h1>
          <p className="lead">Conoce más sobre TechHome, tu tienda de tecnología de confianza.</p>
        </Container>
      </header>

      <Container as="main" className="my-5">
        {/* Sección de Introducción */}
        <section className="mb-5">
          <h2 className="text-center mb-4">¿Quiénes somos?</h2>
          <p className="text-center lead">
            En TechHome, nos apasiona la tecnología y nos dedicamos a ofrecer los mejores productos tecnológicos del mercado. 
            Desde dispositivos de última generación hasta accesorios innovadores, estamos aquí para satisfacer tus necesidades tecnológicas.
          </p>
        </section>

        {/* Misión y Visión */}
        <Row as="section" className="mb-5">
          <Col md={6} className="mb-4 mb-md-0">
            <div className="p-4 bg-light rounded h-100">
              <h3 className="text-primary mb-3">Misión</h3>
              <p>
                Nuestra misión es proporcionar productos tecnológicos de alta calidad que mejoren la vida de nuestros clientes, 
                ofreciendo un servicio excepcional y una experiencia de compra única.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="p-4 bg-light rounded h-100">
              <h3 className="text-primary mb-3">Visión</h3>
              <p>
                Ser la tienda líder en tecnología, reconocida por nuestra innovación, calidad y compromiso con la satisfacción del cliente.
              </p>
            </div>
          </Col>
        </Row>

        {/* Equipo */}
        <section className="mb-5">
          <h2 className="text-center mb-4">Nuestro Equipo</h2>
          <Row className="text-center">
            {teamMembers.map(member => (
              <Col key={member.id} md={4} className="mb-4">
                <div className="team-member">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.position}`}
                    roundedCircle
                    className="mb-3"
                    style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                  />
                  <h5>{member.name}</h5>
                  <p className="text-muted">{member.position}</p>
                </div>
              </Col>
            ))}
          </Row>
        </section>

        {/* Galería */}
        <section>
          <h2 className="text-center mb-4">Nuestra Historia en Imágenes</h2>
          <Row>
            {galleryImages.map((image, index) => (
              <Col key={index} md={4} className="mb-4">
                <Image
                  src={image}
                  alt={`Galería ${index + 1}`}
                  fluid
                  rounded
                  className="gallery-image"
                />
              </Col>
            ))}
          </Row>
        </section>
      </Container>
    </>
  );
};

export default About;