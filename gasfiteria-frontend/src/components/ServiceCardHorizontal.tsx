import { Card, Button, Image } from 'react-bootstrap'; 

/*todo esto esta pensado en la carta de servicios */

interface ServiceCardHorizontalProps {
  
  title: string;

  description: string;
  imageUrl: string;
  price: string;
  altText?: string;
  link: string;
}


function ServiceCardHorizontal({ title, description, imageUrl, price, altText,link }: ServiceCardHorizontalProps) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img 
      variant="top" 
      src={imageUrl} 
      alt={altText} 
      className="img-fluid"
      style={{ objectFit: 'cover', height: '200px' }}
      />
      <Card.Body className="d-flex flex-column">{/* d-flex flex-column para organizar el contenido verticalmente */}

        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text className="fs-4 fw-bold mb-1">${price}.-</Card.Text>

        {/* Botones */}
        {/* mt-auto empuja los botones al final si el contenido de arriba es más corto */}
        <div className="d-grid gap-2 mt-auto">
          <Button 
            variant="success" // Color verde de Bootstrap
            // Si usas React Router: as={Link} to={buyLink || '#'}
            href={link} // Si no usas React Router
            className="w-100" // w-100 para que el botón ocupe todo el ancho disponible
          >
            Agendar Servicio
          </Button>

        </div>
    
      </Card.Body>
    </Card>
  );
}


export default ServiceCardHorizontal;