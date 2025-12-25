
import '../css/Carrousel.css';

import {Carousel as XCarousel, Image} from 'react-bootstrap';
import { useState } from 'react';

import Imagen1 from '../images/panoramicas/panoramica_1.jpg';
import Imagen2 from '../images/panoramicas/panoramica_2.jpg';
import Imagen3 from '../images/panoramicas/panoramica_3.jpg';


function Carousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {setIndex(selectedIndex);};

    return (
        <XCarousel activeIndex={index} onSelect={handleSelect}>
            <XCarousel.Item>
                <Image src={Imagen1} alt="Imagen 1" fluid className="" style={{height:'250px', width: '918px', padding: '10px 10px 0px 0px', left: '0px'}}/>
                <XCarousel.Caption>
                    <h3 className='letras'>Instalaciones</h3>
                </XCarousel.Caption>
            </XCarousel.Item>
            <XCarousel.Item>
                <Image src={Imagen2} alt="Imagen 2" fluid className="" style={{height:'250px', width: '918px', padding: '10px 10px 0px 0px',left: '0px'}}/>
                <XCarousel.Caption>
                    <h3 className='letras'>Reparaciones</h3>
                </XCarousel.Caption>
            </XCarousel.Item>
            <XCarousel.Item>
                <Image src={Imagen3} alt="Imagen 3" fluid className="" style={{height:'250px', width: '918px', padding: '10px 10px 0px 0px',left: '0px'}}/>
                <XCarousel.Caption>
                    <h3 className='letras'>Calefont</h3>
                </XCarousel.Caption>
            </XCarousel.Item>
        </XCarousel>
    );
}


export default Carousel;