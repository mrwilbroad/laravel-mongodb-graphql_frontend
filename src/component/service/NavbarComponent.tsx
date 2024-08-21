import { Navbar, Nav } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar
      expand="lg"
      className="px-2 shadow  border-bottom border-bottom-3 border-white  border-bottom-primary"
      bg="light"
      variant="light"
    >
      <Navbar.Brand className="text-">react-grapql course</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-collapse-id">
        <i className="fa-solid fa-toggle-off fa-lg text-primary"></i>
      </Navbar.Toggle>
      <Navbar.Collapse id="navbar-collapse-id">
        <Nav className="ms-auto">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
