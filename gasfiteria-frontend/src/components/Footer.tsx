import "../css/Footer.css";

import { Container } from 'react-bootstrap';
function Footer() {
  return (
    <footer className="main-footer mt-5 p-4">
        <Container className='contenedor'>
          <div className="footer-section links mb-4 mb-md-0 text-center text-md-start"> 
            <h3 className="titulos">Sobre Nosotros</h3>
            <p>Esteban Ramirez un maestro gasfiter forjado en las obras de la construccion, con los conocimientos necesarios para resolver cualquier problema de gasfiteria. Mis forma de trabajar deja claro mi experiencia.</p>
            <div className="contact mt-3">
              <p><i className="fas fa-phone me-2"></i> +56 9 2001 4865</p>
              <p><i className="fas fa-envelope me-2"></i> gasfiteria_puentealto@Gmail.com</p>
            </div>
          </div>

          {/* Sección Enlaces Rápidos */}
          <div  className="footer-section links mb-4 mb-md-0 text-center text-md-start"> {/* Añadidas clases para responsividad */}
            <h3 className="titulos">Enlaces Rápidos</h3>
            <ul className="list-unstyled">
              <li>
                <a href="HomePage" className="text-black text-decoration-none">Inicio</a>
              </li>
              <li>
                <a href="Servicios" className="text-black text-decoration-none">Servicios</a>
              </li>
              <li>
                <a href="Productos" className="text-black text-decoration-none">Productos</a>
              </li>
              <li>
                <a href="Agenda" className="text-black text-decoration-none">Agenda</a>
              </li>
              <li>
                <a href="Contacto" className="text-black text-decoration-none">Contacto</a>
              </li>
              <li>
                <a href="PoliticaPrivacidad" className="text-black text-decoration-none">Política de Privacidad</a>
              </li>
            </ul>
          </div>
  
      </Container>
      <div className="footer-bottom text-center mt-4 pt-3 border-top border-secondary"> {/* Añadidas clases para estilo */}
        &copy; 2025 Gasfiteria Ramirez Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;