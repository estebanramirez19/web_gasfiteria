
import { Container, Row, Col } from 'react-bootstrap'; 
import ServiceCardHorizontal from './ServiceCardHorizontal';
import type { ServiceCardHorizontalProps } from './ServiceCardHorizontal'; 

// Importa todas las imágenes necesarias aquí

import Bidet_1 from '../images/instalaciones/bidet.jpg';
import bomba_presurisadora from '../images/instalaciones/bomba_presurisadora.jpg';
import calefont from '../images/instalaciones/calefont.jpg';
import desague_moderno from '../images/instalaciones/desague_moderno.jpg';
import desague_simple from '../images/instalaciones/desague_simple.jpg';
import filtro_polifosfato_antisarro from '../images/instalaciones/filtro_polifosfato_antisarro.jpg';
import lava_manos from '../images/instalaciones/lava_manos.jpg';
import lava_platos_completo from '../images/instalaciones/lava_platos_completo.jpg';
import lava_platos from '../images/instalaciones/lava_platos.jpg';
import llave_angular from '../images/instalaciones/llave_angular.jpg';
import llave_ducha_con_plato from '../images/instalaciones/llave_ducha_con_plato.jpg';
import llave_jardin_bola from '../images/instalaciones/llave_jardin_bola.jpg';
import llave_jardin_mariposa from '../images/instalaciones/llave_jardin_mariposa.jpg';
import monomando_ducha from '../images/instalaciones/monomando_ducha.jpg';
import receptaculo from '../images/instalaciones/receptaculo.jpg';
import sifon_tina_completo from '../images/instalaciones/sifon_tina_completo.jpg';
import sifon from '../images/instalaciones/sifon.jpg';
import tapa_wc from '../images/instalaciones/tapa_wc.jpg';
import termo_electrico from '../images/instalaciones/termo_electrico.jpg';
import tina from '../images/instalaciones/tina.jpg';
import wc from '../images/instalaciones/wc.jpg';


function HorizontalServiceCards() {
  // Datos de los productos 
  const products: ServiceCardHorizontalProps[] = [
    { 
      id: 'bidet1', 
      title: 'Instalacion de Bidet', 
      description: 'instalacion de bidet con todos sus accesorios', 
      imageUrl: Bidet_1, 
      price: '30.000', 
      altText: 'Imagen de un bidet', 
      link: '/' 
    },
  {
    id: 'bomba_presurisadora',
    title: 'Instalacion de Bomba presurizadora',
    description: 'instalacion de bomba presurizadora para mejorar la presion de agua en tu hogar',
    imageUrl: bomba_presurisadora,
    price: '40.000',
    altText: 'Bomba presurizadora',
    link: '/',
  },
  {
    id: 'calefont',
    title: 'Instalacion de Calefont',
    description: 'instalacion basica de calefont, este valor puede variar de ser necesario agregar mas cosas',
    imageUrl: calefont,
    price: '25.000',
    altText: 'Calefont',
    link: '/',
  },
  {
    id: 'desague_moderno',
    title: 'Instalacion de Desagüe moderno',
    description: 'Instalacion de desagüe moderno para baños y cocinas',
    imageUrl: desague_moderno,
    price: '5.000',
    altText: 'Desagüe moderno',
    link: '',
  },
  {
    id: 'desague_simple',
    title: 'Instalacion de Desagüe simple',
    description: 'Instalacion de desagüe simple para baños y cocinas',
    imageUrl: desague_simple,
    price: '5.000',
    altText: 'Desagüe simple',
    link: '/',
  },
  {
    id: 'filtro_polifosfato_antisarro',
    title: 'Instalacion de Filtro polifosfato antisarro',
    description: 'Instalacion de filtro polifosfato antisarro para mejorar la calidad del agua',
    imageUrl: filtro_polifosfato_antisarro,
    price: '35.000',
    altText: 'Filtro polifosfato antisarro',
    link: '/',
  },
  {
    id: 'lava_manos',
    title: 'Instalacion de Lava manos',
    description: 'Instalacion de lava manos para baños y cocinas',
    imageUrl: lava_manos,
    price: '5.000',
    altText: 'Lava manos',
    link: '/',
  },
  {
    id: 'lava_platos_completo',
    title: 'Instalacion de Lava platos completo',
    description: '',
    imageUrl: lava_platos_completo,
    price: '25.000',
    altText: 'Lava platos completo',
    link: '/',
  },
  {
    id: 'lava_platos',
    title: 'Instalacion de Lava platos',
    description: 'Instalacion de lava platos sencillo para cocinas',
    imageUrl: lava_platos,
    price: '5.000',
    altText: 'Lava platos',
    link: '/',
  },
  {
    id: 'llave_angular',
    title: 'Instalacion de Llave angular',
    description: 'Instalacion de llave angular para WC',
    imageUrl: llave_angular,
    price: '5.000',
    altText: 'Llave angular',
    link: '/',
  },
  {
    id: 'llave_ducha_con_plato',
    title: 'Instalacion de Llave ducha con plato',
    description: 'Instalacion de llave ducha con plato para baños',
    imageUrl: llave_ducha_con_plato,
    price: '25.000',
    altText: 'Llave ducha con plato',
    link: '/',
  },
  {
    id: 'llave_jardin_bola',
    title: 'Instalacion de Llave jardín bola',
    description: 'Instalacion de llave jardín bola para exteriores',
    imageUrl: llave_jardin_bola,
    price: '5.000',
    altText: 'Llave jardín bola',
    link: '/',
  },
  {
    id: 'llave_jardin_mariposa',
    title: 'Instalacion de Llave jardín mariposa',
    description: 'Instalacion de llave jardín mariposa para exteriores',
    imageUrl: llave_jardin_mariposa,
    price: '5.000',
    altText: 'Llave jardín mariposa',
    link: '/',
  },
  {
    id: 'monomando_ducha',
    title: 'Instalacion de Monomando ducha',
    description: 'Instalacion de monomando ducha para baños',
    imageUrl: monomando_ducha,
    price: '15.000',
    altText: 'Monomando ducha',
    link: '/',
  },
  {
    id: 'receptaculo',
    title: 'Instalacion de Receptáculo',
    description: 'Instalacion de receptáculo para baños comprado por el cliente',
    imageUrl: receptaculo,
    price: '30.000',
    altText: 'Receptáculo',
    link: '/',
  },
  {
    id: 'sifon_tina_completo',
    title: 'Instalacion de Sifón tina completo',
    description: 'Instalacion de sifón tina completo para baños',
    imageUrl: sifon_tina_completo,
    price: '10.000',
    altText: 'Sifón tina completo',
    link: '/',
  },
  {
    id: 'sifon',
    title: 'Instalacion de Sifón',
    description: 'Instalacion de sifón para lavamanos y lavaplatos',
    imageUrl: sifon,
    price: '5.000',
    altText: 'Sifón',
    link: '/',
  },
  {
    id: 'tapa_wc',
    title: 'Instalacion de Tapa WC',
    description: 'Instalacion de tapa WC para baños',
    imageUrl: tapa_wc,
    price: '7.000',
    altText: 'Tapa WC',
    link: '/',
  },
  {
    id: 'termo_electrico',
    title: 'Instalacion de Termo eléctrico',
    description: 'Instalacion de termo eléctrico para calentar agua',
    imageUrl: termo_electrico,
    price: '45.000',
    altText: 'Termo eléctrico',
    link: '/',
  },
  {
    id: 'tina',
    title: 'Instalacion de Tina',
    description: 'Instalacion de tina para baños',
    imageUrl: tina,
    price: '35.000',
    altText: 'Tina',
    link: '/',
  },
  {
    id: 'wc',
    title: 'Instalacion de WC',
    description: 'Instalacion de WC para baños',
    imageUrl: wc,
    price: '40.000',
    altText: 'WC',
    link: '/',
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
            <ServiceCardHorizontal
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

export default HorizontalServiceCards;