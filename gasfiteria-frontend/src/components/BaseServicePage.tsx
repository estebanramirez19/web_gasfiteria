// ServiceDetailPage.tsx
import { useParams } from 'react-router-dom';
import { services } from './servicesData';

function ServiceDetailPage() {
  const { id } = useParams<{ id: string }>();

  const service = services.find((s) => s.id === id);

  if (!service) {
    return <p>Servicio no encontrado</p>;
  }

  return (
    <div className="container py-4">
      <h1>{service.title}</h1>
      <img
        src={service.imageUrl}
        alt={service.altText}
        style={{ maxWidth: '400px' }}
      />
      <p>{service.description}</p>
      <p className="fs-3 fw-bold">${service.price}.-</p>
      {/* acá puedes agregar más info específica si la almacenas en el objeto */}
    </div>
  );
}

export default ServiceDetailPage;
