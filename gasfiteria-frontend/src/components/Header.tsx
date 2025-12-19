
import { Navbar, Container, Nav, Image} from 'react-bootstrap';
import "../css/Header.css";
import LogoPagina from '../images/logo_pagina.png';

function NavbarHeader() {
    return (
        <>
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container className='navHeader'>


            <Navbar>
                <Container>
                <Navbar.Brand href="#home">
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

            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Servicios</Nav.Link>
            <Nav.Link href="#link">Productos</Nav.Link>
            <Nav.Link href="#link">Agenda</Nav.Link>
            <Nav.Link href="#link">Sobre Nosotros</Nav.Link>
            <Nav.Link href="#link">Registrate / Inicio Sesión</Nav.Link>
          
        </Container>
        </Navbar>

        
        </>
        
    );
}

export default NavbarHeader;