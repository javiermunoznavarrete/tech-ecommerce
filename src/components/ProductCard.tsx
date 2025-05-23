import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import type { Product } from '../types/Product';

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
  const { dispatch } = useCart();

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.src = `https://via.placeholder.com/300x250/6c757d/ffffff?text=Producto`;
  };

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  return (
    <Card className="h-100 product-card">
      <Card.Img
        variant="top"
        src={product.image}
        alt={product.title}
        className="product-image"
        onError={handleImageError}
        style={{ height: '250px', objectFit: 'cover' }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.title}</Card.Title>
        <Card.Text className="flex-grow-1">{product.description}</Card.Text>
        {(product.price !== undefined || showPrice) && product.price && (
          <Card.Text className="text-danger fw-bold">
            {formatPrice(product.price)}
          </Card.Text>
        )}
        {showBuyButton ? (
          <Button
            variant="primary"
            className="mt-auto"
            onClick={handleAddToCart}
          >
            Agregar al Carrito
          </Button>
        ) : (
          <Button
            variant="secondary"
            className="mt-auto"
            onClick={() => console.log('Ver detalles:', product.title)}
          >
            Ver Detalles
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProductCard;