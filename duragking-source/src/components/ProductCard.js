import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { ListGroupItem } from "react-bootstrap";

const ProductCard = () => {
  return (
    <div>
      <br />
      <div class="card">
        <div class="row no-gutters">
          <div class="col-auto">
            <img
              src="https://permobil.com.au/wp-content/uploads/2017/08/no-image-placeholder-2.jpg"
              class="img-fluid"
              alt=""
            ></img>
          </div>
          <div class="col">
            <div class="card-block px-2">
              <Card style={{ width: "50rem" }}>
                {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
                <Card.Body>
                  <Card.Title>Product Title</Card.Title>
                  <Card.Text>
                    |Description|
                    <br />
                    Some quick example text to build on the product title and
                    make up the bulk of the product's content.
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>Style:</ListGroupItem>
                  <ListGroupItem>Quantity:</ListGroupItem>
                  <ListGroupItem>Price:</ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Card.Link href="#">Add to Basket</Card.Link>
                  <Card.Link href="#">Save for Later</Card.Link>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <div class="card-footer w-100 text-muted">Footer</div>
      </div>
    </div>
  );
};

export default ProductCard;
