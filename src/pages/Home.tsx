import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CarouselComponent from '../components/CarouselComponent';
import ProductCard from '../components/ProductCard';
import type { Product } from '../types/Product';

const Home: React.FC = () => {
  const ofertasDestacadas: Product[] = [
    {
      id: 1,
      title: "Laptop Gamer",
      description: "Potente laptop gamer con procesador Intel i7 y tarjeta gráfica RTX 3060.",
      price: 750000,
      image: "/images/producto1.webp",
      isOffer: true
    },
    {
      id: 2,
      title: "Smartphone 5G",
      description: "Disfruta de la velocidad 5G con este smartphone de última generación.",
      price: 800000,
      image: "/images/producto2.webp",
      isOffer: true
    },
    {
      id: 3,
      title: "Auriculares Inalámbricos",
      description: "Auriculares con cancelación de ruido y batería de larga duración.",
      price: 150000,
      image: "/images/producto3.jpg",
      isOffer: true
    }
  ];

  const nuevosProductos: Product[] = [
    {
      id: 4,
      title: "Tablet Pro",
      description: "Pantalla de alta resolución y rendimiento excepcional.",
      image: "/images/producto4.jpg"
    },
    {
      id: 5,
      title: "Smartwatch",
      description: "Monitorea tu salud y mantente conectado con estilo.",
      image: "/images/product5.jpg"
    },
    {
      id: 6,
      title: "Cámara 4K",
      description: "Captura momentos con calidad profesional.",
      image: "/images/product6.jpg"
    },
    {
      id: 7,
      title: "Teclado Mecánico",
      description: "Diseño ergonómico y retroiluminación RGB.",
      image: "/images/product7.jpg"
    }
  ];

  const accesorios: Product[] = [
    {
      id: 8,
      title: "Mouse Gamer",
      description: "Alta precisión y diseño ergonómico.",
      image: "/images/product8.jpg"
    },
    {
      id: 9,
      title: "Cargador Rápido",
      description: "Carga tus dispositivos en tiempo récord.",
      image: "/images/product9.jpg"
    },
    {
      id: 10,
      title: "Funda para Laptop",
      description: "Protección y estilo para tu laptop.",
      image: "/images/product10.jpg"
    },
    {
      id: 11,
      title: "Cable HDMI",
      description: "Transmite video en alta definición.",
      image: "/images/product11.jpg"
    }
  ];

  return (
    <>
      <CarouselComponent />
      
      <Container className="my-5">
        <h1 className="text-center mb-4">Bienvenido a TechHome</h1>
        <p className="text-center lead">
          Tu tienda de tecnología de confianza. Encuentra los mejores productos al mejor precio.
        </p>
      </Container>

      <Container className="my-5">
        {/* Ofertas Destacadas */}
        <section className="mb-5">
          <h2 className="text-center mb-4">Ofertas Destacadas</h2>
          <Row>
            {ofertasDestacadas.map(product => (
              <Col key={product.id} md={4} className="mb-4">
                <ProductCard product={product} showBuyButton={true} />
              </Col>
            ))}
          </Row>
        </section>

        {/* Nuevos Productos */}
        <section className="mb-5">
          <h2 className="text-center mb-4">Nuevos Productos</h2>
          <Row>
            {nuevosProductos.map(product => (
              <Col key={product.id} md={3} sm={6} className="mb-4">
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        </section>

        {/* Accesorios */}
        <section>
          <h2 className="text-center mb-4">Accesorios</h2>
          <Row>
            {accesorios.map(product => (
              <Col key={product.id} md={3} sm={6} className="mb-4">
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        </section>
      </Container>
    </>
  );
};

export default Home;