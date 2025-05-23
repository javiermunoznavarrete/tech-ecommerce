import React from 'react';
import { Modal, Button, ListGroup } from 'react-bootstrap';
import { useCart } from '../context/CartContext';

interface CartModalProps {
  show: boolean;
  onHide: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ show, onHide }) => {
  const { state, dispatch } = useCart();

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Carrito de Compras</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {state.items.length === 0 ? (
          <p>No hay productos en el carrito</p>
        ) : (
          <ListGroup>
            {state.items.map(item => (
              <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
                <div>
                  <h6>{item.title}</h6>
                  <small className="text-muted">Cantidad: {item.quantity}</small>
                </div>
                <div className="d-flex align-items-center">
                  <span className="me-3">{formatPrice(item.price! * item.quantity)}</span>
                  <Button 
                    variant="danger" 
                    size="sm"
                    onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
                  >
                    <i className="fas fa-trash"></i>
                  </Button>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Modal.Body>
      <Modal.Footer className="justify-content-between">
        <div>
          <strong>Total: {formatPrice(state.total)}</strong>
        </div>
        <div>
          <Button variant="secondary" className="me-2" onClick={onHide}>
            Seguir Comprando
          </Button>
          <Button 
            variant="success" 
            disabled={state.items.length === 0}
            onClick={() => {
              // Aquí iría la lógica para proceder al checkout
              alert('Procediendo al checkout...');
            }}
          >
            Proceder al Pago
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default CartModal;