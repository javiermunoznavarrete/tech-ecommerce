import React from 'react';
import { Carousel } from 'react-bootstrap';

interface CarouselItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

const CarouselComponent: React.FC = () => {
  const carouselItems: CarouselItem[] = [
    {
      id: 0,
      image: "/images/baner1.png",
      title: "Audífonos Inalámbricos Premium",
      description: "Descubre la mejor experiencia de sonido con nuestra línea de audífonos de alta gama. Cancelación de ruido activa y calidad de audio excepcional."
    },
    {
      id: 1,
      image: "/images/baner2.webp",
      title: "Potencia tu Gaming",
      description: "Explora nuestra colección de notebooks gaming con las últimas GPU NVIDIA RTX y procesadores de última generación."
    },
    {
      id: 2,
      image: "/images/baner3.png",
      title: "¡Próximamente! Final Mouse",
      description: "Prepárate para la llegada de los mouse gaming más esperados. Final Mouse llegará pronto a nuestra tienda."
    }
  ];

  return (
    <Carousel>
      {carouselItems.map((item) => (
        <Carousel.Item key={item.id}>
          <img
            className="d-block w-100"
            src={item.image}
            alt={item.title}
          />
          <Carousel.Caption>
            <h5>{item.title}</h5>
            <p>{item.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;