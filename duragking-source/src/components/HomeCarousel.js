import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container, Col } from "react-bootstrap";

const HomeCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container>
      <Col sm></Col>
      <Col sm>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://permobil.com.au/wp-content/uploads/2017/08/no-image-placeholder-2.jpg"
              alt="First slide"
              height={600}
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Put subtitle here</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://permobil.com.au/wp-content/uploads/2017/08/no-image-placeholder-2.jpg"
              alt="First slide"
              height={600}
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Put subtitle here</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://permobil.com.au/wp-content/uploads/2017/08/no-image-placeholder-2.jpg"
              alt="First slide"
              height={600}
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
              Put subtitle here
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Col>
      <Col sm></Col>
    </Container>
  );
};

export default HomeCarousel;
