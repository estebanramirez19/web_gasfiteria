// src/data/servicesData.ts
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

export interface ServiceCardHorizontalProps {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  imageUrl: string;
  price: string;
  altText?: string;
  link: string;
}

export const services: ServiceCardHorizontalProps[] = [
  { 
    id: 'bidet1', 
    title: 'Instalacion de Bidet', 
    description: 'instalacion de bidet con todos sus accesorios', 
    imageUrl: Bidet_1, 
    price: '30.000', 
    altText: 'Imagen de un bidet', 
    link: '/servicios/bidet1',
  },
  {
    id: 'bomba_presurisadora',
    title: 'Instalacion de Bomba presurizadora',
    description: 'instalacion de bomba presurizadora para mejorar la presion de agua en tu hogar',
    imageUrl: bomba_presurisadora,
    price: '40.000',
    altText: 'Bomba presurizadora',
    link: '/servicios/bomba_presurisadora',
  },
  {
    id: 'calefont',
    title: 'Instalacion de Calefont',
    description: 'instalacion basica de calefont, este valor puede variar de ser necesario agregar mas cosas',
    imageUrl: calefont,
    price: '25.000',
    altText: 'Calefont',
    link: '/servicios/calefont',
  },
  {
    id: 'desague_moderno',
    title: 'Instalacion de Desagüe moderno',
    description: 'Instalacion de desagüe moderno para baños y cocinas',
    imageUrl: desague_moderno,
    price: '5.000',
    altText: 'Desagüe moderno',
    link: '/servicios/desague_moderno',
  },
  {
    id: 'desague_simple',
    title: 'Instalacion de Desagüe simple',
    description: 'Instalacion de desagüe simple para baños y cocinas',
    imageUrl: desague_simple,
    price: '5.000',
    altText: 'Desagüe simple',
    link: '/servicios/desague_simple',
  },
  {
    id: 'filtro_polifosfato_antisarro',
    title: 'Instalacion de Filtro polifosfato antisarro',
    description: 'Instalacion de filtro polifosfato antisarro para mejorar la calidad del agua',
    imageUrl: filtro_polifosfato_antisarro,
    price: '35.000',
    altText: 'Filtro polifosfato antisarro',
    link: '/servicios/filtro_polifosfato_antisarro',
  },
  {
    id: 'lava_manos',
    title: 'Instalacion de Lava manos',
    description: 'Instalacion de lava manos para baños y cocinas',
    imageUrl: lava_manos,
    price: '5.000',
    altText: 'Lava manos',
    link: '/servicios/lava_manos',
  },
  {
    id: 'lava_platos_completo',
    title: 'Instalacion de Lava platos completo',
    description: 'Instalacion de lava platos con todos sus accesorios',
    imageUrl: lava_platos_completo,
    price: '25.000',
    altText: 'Lava platos completo',
    link: '/servicios/lava_platos_completo',
  },
  {
    id: 'lava_platos',
    title: 'Instalacion de Lava platos',
    description: 'Instalacion de lava platos sencillo para cocinas',
    imageUrl: lava_platos,
    price: '5.000',
    altText: 'Lava platos',
    link: '/servicios/lava_platos',
  },
  {
    id: 'llave_angular',
    title: 'Instalacion de Llave angular',
    description: 'Instalacion de llave angular para WC',
    imageUrl: llave_angular,
    price: '5.000',
    altText: 'Llave angular',
    link: '/servicios/llave_angular',
  },
  {
    id: 'llave_ducha_con_plato',
    title: 'Instalacion de Llave ducha con plato',
    description: 'Instalacion de llave ducha con plato para baños',
    imageUrl: llave_ducha_con_plato,
    price: '25.000',
    altText: 'Llave ducha con plato',
    link: '/servicios/llave_ducha_con_plato',
  },
  {
    id: 'llave_jardin_bola',
    title: 'Instalacion de Llave jardín bola',
    description: 'Instalacion de llave jardín bola para exteriores',
    imageUrl: llave_jardin_bola,
    price: '5.000',
    altText: 'Llave jardín bola',
    link: '/servicios/llave_jardin_bola',
  },
  {
    id: 'llave_jardin_mariposa',
    title: 'Instalacion de Llave jardín mariposa',
    description: 'Instalacion de llave jardín mariposa para exteriores',
    imageUrl: llave_jardin_mariposa,
    price: '5.000',
    altText: 'Llave jardín mariposa',
    link: '/servicios/llave_jardin_mariposa',
  },
  {
    id: 'monomando_ducha',
    title: 'Instalacion de Monomando ducha',
    description: 'Instalacion de monomando ducha para baños',
    imageUrl: monomando_ducha,
    price: '15.000',
    altText: 'Monomando ducha',
    link: '/servicios/monomando_ducha',
  },
  {
    id: 'receptaculo',
    title: 'Instalacion de Receptáculo',
    description: 'Instalacion de receptáculo para baños comprado por el cliente',
    imageUrl: receptaculo,
    price: '30.000',
    altText: 'Receptáculo',
    link: '/servicios/receptaculo',
  },
  {
    id: 'sifon_tina_completo',
    title: 'Instalacion de Sifón tina completo',
    description: 'Instalacion de sifón tina completo para baños',
    imageUrl: sifon_tina_completo,
    price: '10.000',
    altText: 'Sifón tina completo',
    link: '/servicios/sifon_tina_completo',
  },
  {
    id: 'sifon',
    title: 'Instalacion de Sifón',
    description: 'Instalacion de sifón para lavamanos y lavaplatos',
    imageUrl: sifon,
    price: '5.000',
    altText: 'Sifón',
    link: '/servicios/sifon',
  },
  {
    id: 'tapa_wc',
    title: 'Instalacion de Tapa WC',
    description: 'Instalacion de tapa WC para baños',
    imageUrl: tapa_wc,
    price: '7.000',
    altText: 'Tapa WC',
    link: '/servicios/tapa_wc',
  },
  {
    id: 'termo_electrico',
    title: 'Instalacion de Termo eléctrico',
    description: 'Instalacion de termo eléctrico para calentar agua',
    imageUrl: termo_electrico,
    price: '45.000',
    altText: 'Termo eléctrico',
    link: '/servicios/termo_electrico',
  },
  {
    id: 'tina',
    title: 'Instalacion de Tina',
    description: 'Instalacion de tina para baños',
    imageUrl: tina,
    price: '35.000',
    altText: 'Tina',
    link: '/servicios/tina',
  },
  {
    id: 'wc',
    title: 'Instalacion de WC',
    description: 'Instalacion de WC para baños',
    imageUrl: wc,
    price: '40.000',
    altText: 'WC',
    link: '/servicios/wc',
  },
];
