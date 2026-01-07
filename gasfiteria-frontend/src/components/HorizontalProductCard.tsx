
import { Container, Row, Col } from 'react-bootstrap'; 
import ProductCardHorizontal from './ProductCardHorizontal';
import type { ProductCardHorizontalProps } from './ProductCardHorizontal'; 

// Importa todas las imágenes necesarias aquí
// Asegúrate de que las rutas relativas sean correctas
import CodoBronce from '../images/fiting/codo_bronce.jpg';
import CodoCobre from '../images/fiting/codo_cobre.jpg';
import CodoPpr from '../images/fiting/codo_ppr.jpg';
import CodoPvc from '../images/fiting/codo_pvc_h.jpg';
import CaneriaCobre from '../images/cañerias/cañeria_cobre.jpg';
import CaneriaPpr from '../images/cañerias/cañeria_ppr.jpg';
import CaneriaPvch from '../images/cañerias/cañeria_pvch.png';
import tuberiaPvc from '../images/cañerias/tuberia_pvc_sanitario.png';
import tuberiaPvc2 from '../images/cañerias/tuberia_pvc_sanitario2.jpg';



function HorizontalProductCards() {
  // Datos de los productos para la sección horizontal
  const products: ProductCardHorizontalProps[] = [
    { 
      id: 'codoBronce', 
      title: 'Codo Bronce', 
      description: 'Codo de bronce 90° para soldar', 
      imageUrl: CodoBronce, 
      price: '2.500', 
      altText: 'CodoBronce', 
      link: '/'
    },
    { 
      id: 'codoCobre', 
      title: 'Codo Cobre', 
      description: 'Codo de cobre 90° para soldar', 
      imageUrl: CodoCobre, 
      price: '3.000', 
      altText: 'CodoCobre', 
      link: '/' 
    },
    { 
      id: 'codoPpr', 
      title: 'Codo PPR', 
      description: 'Codo de PPR 90° para termo fusion', 
      imageUrl: CodoPpr, 
      price: '300',
      altText: 'CodoPpr', 
      link: '/' 
    },
    { 
      id: 'codoPvc', 
      title: 'Codo PVC', 
      description: 'Codo de PVC 90° para pegar', 
      imageUrl: CodoPvc, 
      price: '1000', 
      altText: 'CodoPvc', 
      link: '/'
    },
    {
      id: 'caneriaCobre', 
      title: 'Cañeria Cobre', 
      description: '6mts Cañeria de cobre 1/2 pulgada', 
      imageUrl: CaneriaCobre, 
      price: '5000', 
      altText: 'Cañeria de Cobre',
      link: '/'
    },
    {
      id: 'caneriaPpr', 
      title: 'Caneria PPR', 
      description: '6mts Cañeria de PPR 1/2 pulgada', 
      imageUrl: CaneriaPpr, 
      price: '3000', 
      altText: 'Cañeria de PPR',
      link: '/'
    },
    {
      id: 'caneriapvch', 
      title: 'Caneria PVCH', 
      description: '6mts Cañeria de PVCH 1/2 pulgada', 
      imageUrl: CaneriaPvch, 
      price: '4000', 
      altText: 'Cañeria de PVCH',
      link: '/'
    },
    {
      id: 'tuberiaPvc', 
      title: 'Tuberia PVC Sanitario', 
      description: '6mts Tuberia de PVC sanitario 4" pulgadas', 
      imageUrl: tuberiaPvc, 
      price: '6000', 
      altText: 'Tuberia PVC Sanitario',
      link: '/'
    },
    {
      id: 'tuberiaPvc2', 
      title: 'Tuberia PVC Sanitario 2', 
      description: '6mts Tuberia de PVC sanitario 4" pulgada (110mm) (segunda opción)', 
      imageUrl: tuberiaPvc2, 
      price: '6500', 
      altText: 'Tuberia PVC Sanitario 2',
      link: '/'
    },
  ];

  return (
    <Container fluid className="my-5">
        <h2 className="mb-4 text-center">Productos Principales</h2> 
        <Row className="flex-nowrap overflow-auto py-3"> {/* 'flex-nowrap' evita que las columnas se envuelvan, 'overflow-auto' habilita el scroll */}
        {products.map((product) => (
            <Col key={product.id} xs={10} sm={6} md={4} lg={3} xl={2} className="mb-3 d-flex">
            {/* xs, sm, md, lg, xl definen el ancho de cada tarjeta en diferentes tamaños de pantalla.
                'd-flex' para que las tarjetas ocupen el 100% de la altura de la columna. */}
            <ProductCardHorizontal
              title={product.title}
              description={product.description}
              imageUrl={product.imageUrl}
              altText={product.altText}
              price={product.price}
              link={product.link}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HorizontalProductCards;