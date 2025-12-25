import "../css/Header.css";

import { Navbar, Container, Nav, Image} from 'react-bootstrap';
import LogoPagina from '../images/logo_pagina.png';

function NavbarHeader() {
    return (
        <>
        <Navbar expand="lg" className="navbar">
        <Container className='navHeader'>


            <Navbar>
                <Container>
                <Navbar.Brand href="HomePage">
                    <Image
                    src={LogoPagina}
                    fluid
                    width="140"
                    height="60"
                    className="d-inline-block align-top"
                    alt="logo de la pagina"
                    />
                </Navbar.Brand>
                </Container>
            </Navbar>

            <Nav.Link href="HomePage">Home</Nav.Link>
            <Nav.Link href="Servicios">Servicios</Nav.Link>
            <Nav.Link href="Productos">Productos</Nav.Link>
            <Nav.Link href="Agenda">Agenda</Nav.Link>
            <Nav.Link href="SobreNosotros">Sobre Nosotros</Nav.Link>
            <Nav.Link href="Registro">Registrate / Inicio Sesión</Nav.Link>
          
        </Container>
        </Navbar>

        
        </>
        
    );
}

export default NavbarHeader;