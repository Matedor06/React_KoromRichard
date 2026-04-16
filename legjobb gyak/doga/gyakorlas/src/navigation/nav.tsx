import { Container, Nav, Navbar } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">PizzaShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">AllPizza</Nav.Link>
            <Nav.Link href="/cart">Kosár</Nav.Link>
            <Nav.Link href="/new-pizza">Új Pizza</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;