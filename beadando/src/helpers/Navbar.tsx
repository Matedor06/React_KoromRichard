import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavDropdown } from 'react-bootstrap';

function NavigationBar() {
  const location = useLocation();

  return (
    <Navbar expand="lg" sticky="top" style={{ background: '#fff', borderBottom: '1px solid #e5e5e5' }}>
      <Container>
        <Navbar.Brand href="/" style={{ fontWeight: 600, letterSpacing: '0.01em' }}>
          Pizza App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">All Pizzas</Nav.Link>
            <Nav.Link href="/new-pizza" >New Pizza</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
            <Nav.Link href="/login" >Login</Nav.Link>
            <NavDropdown title="Order" id="1">
              <NavDropdown.Item href="/order">ListOrders</NavDropdown.Item>
              <NavDropdown.Item href="/neworder">NewOrder</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;