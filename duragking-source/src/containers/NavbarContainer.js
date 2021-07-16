import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import LogInModal from "../components/LogInModal";
import RegisterModal from "../components/RegisterModal";
import { ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom"

const NavbarContainer = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">DuRag King</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* <Nav.Link href="#home" handleClick={props.determinePageServe("home")} >Home</Nav.Link> */}
          {/* <Nav.Link href="#home" handleClick={props.determinePageServe("user")} >Profile</Nav.Link> */}
          <Button variant="light">
            <Link to="/">Home</Link>
          </Button>
          <Button variant="light">
            <Link to="/profile">Profile</Link>
          </Button>
          <Button variant="light">
            <Link to="/news">News</Link>
          </Button>
          {/* <Nav.Link href="#link">News</Nav.Link> */}

          <NavDropdown title="Shop" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              <Link to="/shop/men">Men</Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              <Link to="/shop/women">Women</Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              <Link to="/shop/kids">Kids</Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Show All Products
            </NavDropdown.Item>
          </NavDropdown>
          <Button variant="light">
            <Link to="/contact">Contact</Link>
          </Button>
        </Nav>
        <ButtonGroup aria-label="Basic example" className="mr-sm-2">
          <RegisterModal />
          <LogInModal />
          </ButtonGroup>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarContainer;
