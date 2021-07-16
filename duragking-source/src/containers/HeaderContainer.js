import { Container, Col, Row } from "react-bootstrap";


const HeaderContainer = () => {
  return (
    <Container>
      <Row>
        <Col md={{ span: 3 }}>Logo goes here</Col>
        <Col md={{ span: 2, offset: 8 }}>
          
        </Col>
      </Row>
    </Container>
  );
};

export default HeaderContainer;
