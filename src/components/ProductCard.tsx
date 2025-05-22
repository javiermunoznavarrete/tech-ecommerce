import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Product } from '../types/Product';

interface ProductCardProps {
  product: Product;
  showBuyButton?: boolean;
  showPrice?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  showBuyButton = false, 
  showPrice = false 
}) => {
  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <Card className="h-100 product-card">
      <Card.Img 
        variant="top" 
        src={product.image} 
        alt={product.title}
        className="product-image"
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        {(product.price || showPrice) && (
          <Card.Text className="text-danger mt-auto">
            <strong>{formatPrice(product.price || 0)}</strong>
          </Card.Text>
        )}
        {showBuyButton ? (
          <Button variant="primary" className="mt-2">
            Comprar Ahora
          </Button>
        ) : (
          <Button variant="secondary" className="mt-2">
            Ver Detalles
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProductCard;