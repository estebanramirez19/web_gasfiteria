
import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import "../css/Header.css";

function NavbarHeader() {
    return (
        <>
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container className='navHeader'>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>


            <Nav className="me-auto">
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item href="#action/3.4">
                    Separated link
                </NavDropdown.Item>
                </NavDropdown>
            </Nav>
          
        </Container>
        </Navbar>

        
        </>
        
    );
}

export default NavbarHeader;