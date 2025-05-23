import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import type { Product } from '../types/Product';

const Shop: React.FC = () => {
  const ofertasDestacadas: Product[] = [
    {
      id: 1,
      title: "Laptop Gamer",
      description: "Potente laptop gamer con procesador Intel i7 y tarjeta gráfica RTX 3060.",
      price: 1200000,
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
      price: 700000,
      image: "/images/producto4.jpg"
    },
    {
      id: 5,
      title: "Smartwatch",
      description: "Monitorea tu salud y mantente conectado con estilo.",
      price: 100000,
      image: "/images/product5.jpg"
    },
    {
      id: 6,
      title: "Cámara 4K",
      description: "Captura momentos con calidad profesional.",
      price: 7000000,
      image: "/images/product6.jpg"
    },
    {
      id: 7,
      title: "Teclado Mecánico",
      description: "Diseño ergonómico y retroiluminación RGB.",
      price: 10000,
      image: "/images/product7.jpg"
    }
  ];

  const categories = [
    {
      id: 1,
      title: "Laptops",
      description: "Encuentra laptops para gaming, trabajo y estudio.",
      image: "/images/category-laptops.jpg",
      link: "/category/laptops"
    },
    {
      id: 2,
      title: "Smartphones",
      description: "Descubre los últimos modelos de smartphones.",
      image: "/images/category-smartphones.jpg",
      link: "/category/smartphones"
    },
    {
      id: 3,
      title: "Accesorios",
      description: "Explora accesorios como teclados, mouse y más.",
      image: "/images/category-accessories.jpg",
      link: "/category/accessories"
    },
    {
      id: 4,
      title: "Gaming",
      description: "Consolas, sillas gamer y todo lo que necesitas.",
      image: "/images/category-gaming.jpg",
      link: "/category/gaming"
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
      <header className="bg-light py-5">
        <Container className="text-center">
          <h1 className="display-4">Nuestra Tienda</h1>
          <p className="lead">Explora los mejores productos tecnológicos en TechHome.</p>
        </Container>
      </header>

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
                <ProductCard product={product} showPrice={true} />
              </Col>
            ))}
          </Row>
        </section>

        {/* Categorías de Productos */}
        <section className="mb-5">
          <h2 className="text-center mb-4">Categorías de Productos</h2>
          <Row className="text-center">
            {categories.map(category => (
              <Col key={category.id} md={3} sm={6} className="mb-4">
                <Card className="h-100 category-card">
                  <Card.Img 
                    variant="top" 
                    src={category.image} 
                    alt={category.title}
                    className="category-image"
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{category.title}</Card.Title>
                    <Card.Text>{category.description}</Card.Text>
                    <Button 
                      variant="primary" 
                      href={category.link}
                      className="mt-auto"
                    >
                      Ver {category.title}
                    </Button>
                  </Card.Body>
                </Card>
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

export default Shop;