import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const NavbarContainer = ({
  determinePageServe
}) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">DuRag King</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* <Nav.Link href="#home" handleClick={props.determinePageServe("home")} >Home</Nav.Link> */}
          {/* <Nav.Link href="#home" handleClick={props.determinePageServe("user")} >Profile</Nav.Link> */}
          <Button variant="light" onClick={() => determinePageServe("home")} >Home</Button>
          <Button variant="light" onClick={() => determinePageServe("user")} >Profile</Button>
          <Button variant="light" onClick={() => determinePageServe("news")} >News</Button>
          {/* <Nav.Link href="#link">News</Nav.Link> */}

          <NavDropdown title="Shop" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Men</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Women
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Kids</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Show All Products
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarContainer;
