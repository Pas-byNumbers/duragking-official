import { Container, Col, Row } from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap";
import LogInModal from "../components/LogInModal";
import RegisterModal from "../components/RegisterModal";

const HeaderContainer = () => {
  return (
    <Container>
      <Row>
        <Col md={{ span: 3 }}>Logo goes here</Col>
        <Col md={{ span: 2, offset: 8 }}>
          <ButtonGroup aria-label="Basic example">
            <RegisterModal />
            <LogInModal />
          </ButtonGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default HeaderContainer;
