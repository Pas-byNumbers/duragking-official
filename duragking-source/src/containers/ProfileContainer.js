import { Tab, Row, Col, Nav, Card } from "react-bootstrap";

const UserContainer = () => {
  return (
    <div>
        <br />
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Col sm={9}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Account</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">My Orders</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">My Wishlist</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">Payment Methods</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fifth">Saved Addresses</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
            </Card.Body>
          </Card>
          <Col sm={9}>
            <Tab.Content>
              <Card style={{ width: "70rem" }}>
                <Card.Body>
                  <Tab.Pane eventKey="first">
                    <h1>Account Home Page</h1>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <h1>Order Details</h1>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <h1>Wishlist Section</h1>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                    <h1>Payment Methods</h1>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fifth">
                    <h1>Saved Addresses</h1>
                  </Tab.Pane>
                </Card.Body>
              </Card>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default UserContainer;
