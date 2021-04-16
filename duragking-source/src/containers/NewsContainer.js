import {
  Card,
  ListGroup,
  ListGroupItem,
  Container,
  Row,
  Col,
} from "react-bootstrap";

const NewsContainer = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col></Col>
          <Col xs={10}></Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
          <br />
            <Card style={{ width: "60rem" }}>
              <Card.Img
                variant="top"
                src="http://via.placeholder.com/640x360"
              />
              <Card.Body>
                <Card.Title>Post Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the post title and make up
                  the bulk of the post's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>List item 1</ListGroupItem>
                <ListGroupItem>List item 2</ListGroupItem>
                <ListGroupItem>List item 3</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Hyperlink 1</Card.Link>
                <Card.Link href="#">Hyperlink 2 or Social Media Handles</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col></Col>
          <Col xs={10}></Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
          <br />
            <Card style={{ width: "60rem" }}>
              <Card.Img
                variant="top"
                src="http://via.placeholder.com/640x360"
              />
              <Card.Body>
                <Card.Title>Post Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the post title and make up
                  the bulk of the post's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>List item 1</ListGroupItem>
                <ListGroupItem>List item 2</ListGroupItem>
                <ListGroupItem>List item 3</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Hyperlink 1</Card.Link>
                <Card.Link href="#">Hyperlink 2 or Social Media Handles</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default NewsContainer;
