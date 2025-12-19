
import '../css/Carrousel.css';
import {Carousel as XCarousel, Image} from 'react-bootstrap';

import Imagen1 from '../images/panoramicas/panoramica_1.jpg';
import Imagen2 from '../images/panoramicas/panoramica_2.jpg';
import Imagen3 from '../images/panoramicas/panoramica_3.jpg';


function Carousel() {
    return (
        <XCarousel indicators={false} controls={true} interval={5000} className="my-3">
            <XCarousel.Item>
                <Image src={Imagen1} alt="Imagen 1" fluid className="d-block w-100" style={{height:'300px', width: '80%'}}/>
            </XCarousel.Item>
            <XCarousel.Item>
                <Image src={Imagen2} alt="Imagen 2" fluid className="d-block w-100" style={{height:'300px', width: '80%'}}/>
            </XCarousel.Item>
            <XCarousel.Item>
                <Image src={Imagen3} alt="Imagen 3" fluid className="d-block w-100" style={{height:'300px', width: '80%'}}/>
            </XCarousel.Item>
        </XCarousel>

    );
}



export default Carousel;