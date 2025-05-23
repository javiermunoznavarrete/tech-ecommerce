import React from 'react';
import { Carousel } from 'react-bootstrap';
import './CarouselComponent.css';

interface CarouselItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

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

const CarouselComponent: React.FC = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.src = `https://via.placeholder.com/1920x600/6c757d/ffffff?text=Imagen+no+disponible`;
  };

  return (
    <div className="carousel-wrapper">
      <Carousel fade interval={5000}>
        {carouselItems.map((item) => (
          <Carousel.Item key={item.id}>
            <img
              className="carousel-image"
              src={item.image}
              alt={item.title}
              onError={handleImageError}
            />
            <Carousel.Caption className="carousel-caption">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;